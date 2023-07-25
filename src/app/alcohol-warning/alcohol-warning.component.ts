import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alcohol-warning',
  templateUrl: './alcohol-warning.component.html',
  styleUrls: ['./alcohol-warning.component.css']
})
export class AlcoholWarningComponent {
  constructor(public dialogRef: MatDialogRef<AlcoholWarningComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
