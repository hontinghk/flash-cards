import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-creat-card-dialog',
  templateUrl: './creat-card-dialog.component.html',
  styleUrls: ['./creat-card-dialog.component.css']
})
export class CreatCardDialogComponent {
  card: Card = new Card();

  constructor(
    public dialogRef: MatDialogRef<CreatCardDialogComponent>,
    private cardService: CardService
  ) { }

  onSaveClick(): void {
    this.cardService.addCard(this.card).subscribe(() => {
      this.dialogRef.close("save");
    });
  }

  onCloseClick(): void {
    this.dialogRef.close("close");
  }

}
