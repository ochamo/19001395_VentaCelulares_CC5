import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CreateCellphoneRequest } from 'src/app/shared/model/request/create-cellphone.request';
import { CellphoneService } from 'src/app/shared/service/cellphone/cellphone.service';

@Component({
  selector: 'app-create-phone',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.scss']
})
export class CreatePhoneComponent implements OnInit, OnDestroy {
  createPhoneForm: FormGroup;
  private subs: Subscription[] = [];

  constructor(
    private dialogRef: MatDialogRef<CreatePhoneComponent>,
    private phoneService: CellphoneService
  ) {
    this.initForm();
  }
  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe());
  }

  private initForm() {
    this.createPhoneForm = new FormGroup({
      cant: new FormControl(0, Validators.required),
      img: new FormControl('', Validators.required),
      descr: new FormControl('', Validators.required),
      caract: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      numSeri: new FormControl('', Validators.required),
      preci: new FormControl(0.0, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  createPhone(): void {
    if (this.createPhoneForm.valid) {
      let request = new CreateCellphoneRequest();
      request.cant = this.createPhoneForm.get('cant')?.value
      request.img = this.createPhoneForm.get('img')?.value
      request.descr = this.createPhoneForm.get('descr')?.value
      request.caract = this.createPhoneForm.get('caract')?.value
      request.model = this.createPhoneForm.get('model')?.value
      request.numSeri = this.createPhoneForm.get('numSeri')?.value
      request.preci = this.createPhoneForm.get('preci')?.value
      this.doCreatePhone(request);
    }
  }

  private doCreatePhone(request: CreateCellphoneRequest) {
    let res = this.phoneService.createCellphone(request).subscribe({
      next: (_) => {
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.subs.push(res);
  }

}
