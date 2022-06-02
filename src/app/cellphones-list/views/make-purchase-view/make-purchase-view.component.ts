import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CreatePurchaseRequest } from 'src/app/shared/model/request/create-purchase.request';
import { AddressResponse } from 'src/app/shared/model/response/address.response';
import { CellphoneResponse } from 'src/app/shared/model/response/cellphone.response';
import { NitResponse } from 'src/app/shared/model/response/nit.response';
import { AddressService } from 'src/app/shared/service/address/address.service';
import { FacturaService } from 'src/app/shared/service/factura/factura.service';
import { NitService } from 'src/app/shared/service/nit/nit.service';

export class MakePurchaseArgs {
  cellphone: CellphoneResponse;

  constructor(cellphone: CellphoneResponse) {
    this.cellphone = cellphone;
  }

}

@Component({
  selector: 'app-make-purchase-view',
  templateUrl: './make-purchase-view.component.html',
  styleUrls: ['./make-purchase-view.component.scss']
})
export class MakePurchaseViewComponent implements OnInit {
  createPurchaseForm: FormGroup;
  userAddresses: AddressResponse[] = [];
  userNits: NitResponse[] = [];
  subs: Subscription[] = [];
  showNitDropdown = false;
  constructor(
    private addressService: AddressService,
    private nitService: NitService,
    private facturaService: FacturaService,
    private dialogRef: MatDialogRef<MakePurchaseViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MakePurchaseArgs
  ) {
    this.initForm();
    this.getAddresses();
    this.getNits();
  }

  initForm(): void {
    this.createPurchaseForm = new FormGroup({
      nitN: new FormControl(''),
      wantNit: new FormControl(false),
      numTarjeta: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      idDirecc: new FormControl(1, Validators.required),
    });

    this.createPurchaseForm.get('wantNit')?.valueChanges.subscribe({
      next: (res) => {
        this.showNitDropdown = res;
      }
    })
  }

  private getNits() {
    const getNitsSub = this.nitService.getNits().subscribe({
      next: (res) => {
        this.userNits = res;
      }
    });
    this.subs.push(getNitsSub);
  }

  private getAddresses(): void {
    let sub = this.addressService.getAddresses().subscribe({
      next: (res) => {
        this.userAddresses = res;
      }
    });
    this.subs.push(sub);
  }

  ngOnInit(): void {
  }

  createPurchase() {
    if (this.createPurchaseForm.valid) {
      let request = new CreatePurchaseRequest();
      if (this.createPurchaseForm.get('wantNit')?.value) {
        request.nitN = this.createPurchaseForm.get('nitN')?.value.nit;
        request.nombreCli = this.createPurchaseForm.get('nitN')?.value.nombreNit;
      } else {
        request.nitN = 'C/F'
        request.nombreCli = 'Consumidor final';
      }
      request.itemToPurchase = this.data.cellphone.idCelular;
      request.pagoInfo.numTarj = this.processNumTarjeta(this.createPurchaseForm.get('numTarjeta')?.value);
      request.pagoInfo.tot = this.data.cellphone.precio;
      request.pedidoInfo.idDirecc = this.createPurchaseForm.get('idDirecc')?.value.idDireccion;
      this.doPurchase(request);
    }
  }

  private doPurchase(request: CreatePurchaseRequest) {
    this.facturaService.createPurchase(request).subscribe({
      next: (res) => {
        this.dialogRef.close();
      }
    })
  }

  private processNumTarjeta(tarjeta: string): string {
    let first4 = tarjeta.substring(0, 4);
    let middle = tarjeta.substring(4, 12);
    let last4 = tarjeta.substring(12);
    let newMiddle8 = middle.replace(/[0-9]/g, 'x');
    return first4 + newMiddle8 + last4;
  }

}
