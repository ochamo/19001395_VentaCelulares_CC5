import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UpdateStockRequest } from 'src/app/shared/model/request/update-stock.request';
import { CellphoneService } from 'src/app/shared/service/cellphone/cellphone.service';

export class UpdateStockArgs {
  idCel: number;

  constructor(idCel = 0) {
    this.idCel = idCel;
  }

}

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit, OnDestroy {
  updateStockForm: FormGroup;
  private subs: Subscription[] = [];

  constructor(
    private dialogRef: MatDialogRef<UpdateStockComponent>,
    private phoneService: CellphoneService,
    @Inject(MAT_DIALOG_DATA) public data: UpdateStockArgs
  ) {
    console.log(data);
    this.initForm();
  }

  initForm(): void {
    this.updateStockForm = new FormGroup({
      cant: new FormControl(0, Validators.required)
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe());
  }

  ngOnInit(): void {
  }

  updateStockPhone() {
    if (this.updateStockForm.valid) {
      let request = new UpdateStockRequest();
      request.cant = this.updateStockForm.get('cant')?.value;
      request.idCel = this.data.idCel;
      this.doUpdate(request);
    }

  }

  doUpdate(request: UpdateStockRequest) {
    let sub = this.phoneService.updateStock(request).subscribe({
      next: (res) => {
        this.dialogRef.close();
      }
    })

    this.subs.push(sub);
  }

}
