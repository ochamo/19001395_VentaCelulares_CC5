import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class SuccessDialogArgs {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.text = text;
    this.title = title;
  }

}

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SuccessDialogArgs
  ) { }

  ngOnInit(): void {
  }

  public onOk() {
    this.dialogRef.close();
  }

}
