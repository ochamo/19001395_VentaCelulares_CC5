import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateNitRequest } from 'src/app/shared/model/request/update-nit.request';
import { NitResponse } from 'src/app/shared/model/response/nit.response';
import { NitService } from 'src/app/shared/service/nit/nit.service';

@Component({
  selector: 'app-update-nit',
  templateUrl: './update-nit.component.html',
  styleUrls: ['./update-nit.component.scss']
})
export class UpdateNitComponent implements OnInit {
  form: FormGroup;
  constructor(
    private nitService: NitService,
    private dialogRef: MatDialogRef<UpdateNitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NitResponse
  ) {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      'nitName': new FormControl(this.data.nombreNit, Validators.required),
      'nitNumber': new FormControl(this.data.nit, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  updateNit(): void {
    if (this.form.valid) {
      let nitRequest = new UpdateNitRequest();
      nitRequest.nitN = this.form.get('nitNumber')?.value;
      nitRequest.nitName = this.form.get('nitName')?.value;
      nitRequest.nitId = this.data.idNit;
      this.doUpdateNit(nitRequest);
    }
  }

  doUpdateNit(nitRequest: UpdateNitRequest): void {
    this.nitService.update(nitRequest).subscribe({
      next: (res) => {
        this.dialogRef.close();
      }
    })
  }

}
