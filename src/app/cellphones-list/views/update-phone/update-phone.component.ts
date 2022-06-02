import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatePhoneRequest } from 'src/app/shared/model/request/update-phone.request';
import { CellphoneResponse } from 'src/app/shared/model/response/cellphone.response';
import { CellphoneService } from 'src/app/shared/service/cellphone/cellphone.service';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.scss']
})
export class UpdatePhoneComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UpdatePhoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CellphoneResponse,
    private phoneService: CellphoneService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = new FormGroup({
      img: new FormControl(this.data.imagen, Validators.required),
      descr: new FormControl(this.data.descripcion, Validators.required),
      caract: new FormControl(this.data.caracteristicas, Validators.required),
      model: new FormControl(this.data.modelo, Validators.required),
      numSeri: new FormControl(this.data.numSerie, Validators.required),
      preci: new FormControl(this.data.precio, Validators.required),
    });
  }

  updatePhone(): void {
    if (this.form.valid) {
      let request = new UpdatePhoneRequest();
      request.celId = this.data.idCelular;
      request.img = this.form.get('img')?.value
      request.descr = this.form.get('descr')?.value
      request.caract = this.form.get('caract')?.value
      request.model = this.form.get('model')?.value
      request.numSeri = this.form.get('numSeri')?.value
      request.preci = this.form.get('preci')?.value
      this.doUpdatePhone(request);
    }
  }

  private doUpdatePhone(request: UpdatePhoneRequest) {
    this.phoneService.update(request).subscribe({
      next: (res) => {
        this.dialogRef.close();
      }
    });
  }


}
