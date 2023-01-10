import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Card } from 'src/app/models/card';
import { CardDataSource } from 'src/app/card-datasource';
import { CardService } from 'src/app/services/card.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatCardDialogComponent } from '../creat-card-dialog/creat-card-dialog.component';
import { DeleteCardDialogComponent } from '../delete-card-dialog/delete-card-dialog.component';
import { EditCardDialogComponent } from '../edit-card-dialog/edit-card-dialog.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CardListComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<Card>;

  dataSource!: CardDataSource;

  columnsToDisplay = ['ID', 'Front'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  expandedCard!: Card;
  front: boolean = true;

  constructor(private cardService: CardService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataSource = new CardDataSource(this.cardService);
    this.dataSource.loadCards();
  }

  refresh(): void {
    this.front = true;

    this.dataSource.loadCards();
    this.table.renderRows();
  }

  flipOnClick(): void {
    this.front = !this.front;
  }

  openCreateCardDialog(): void {
    const dialogRef = this.dialog.open(CreatCardDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "save") {
        this.refresh();
      }
    });

  }

  openEditCardDialog(): void {
    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width: '500px',
      data: this.expandedCard
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "edit") {
        this.refresh();
      }
    });
  }

  openDeleteCardDialog(): void {
    const dialogRef = this.dialog.open(DeleteCardDialogComponent, {
      data: this.expandedCard.id
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "delete") {
        this.refresh();
      }
    });
  }

}
