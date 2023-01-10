import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-delete-card-dialog',
  templateUrl: './delete-card-dialog.component.html',
  styleUrls: ['./delete-card-dialog.component.css']
})
export class DeleteCardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cardId: number,
    private cardService: CardService
  ) { }

  onConfirmClick(): void {
    this.cardService.deleteCard(this.cardId).subscribe(() => {
      this.dialogRef.close("delete");
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
