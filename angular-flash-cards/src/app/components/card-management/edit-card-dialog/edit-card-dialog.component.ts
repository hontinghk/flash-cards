import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-edit-card-dialog',
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.css']
})
export class EditCardDialogComponent {
  editedCard: Card;

  constructor(
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public originalCard: Card,
    private cardService: CardService
  ) {
    this.editedCard = { ...originalCard };
  }

  onEditClick(): void {
    this.cardService.eidtCard(this.editedCard).subscribe(() => {
      this.dialogRef.close("edit");
    });
  }

  onCloseClick(): void {
    this.dialogRef.close("close");
  }

}
