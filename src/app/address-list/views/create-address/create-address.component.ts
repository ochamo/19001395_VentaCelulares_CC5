import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CreateAddressRequest } from 'src/app/shared/model/request/create-address.request';
import { LocalityResponse } from 'src/app/shared/model/response/locality.response';
import { MuniResponse } from 'src/app/shared/model/response/munis.response';
import { AddressService } from 'src/app/shared/service/address/address.service';
import { LocalityService } from 'src/app/shared/service/locality/locality.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit, OnDestroy {
  public createAddressForm: FormGroup;
  public localities: LocalityResponse[] = [];
  public currentDep: LocalityResponse;
  private subs: Subscription[];
  
  constructor(
    private dialogRef: MatDialogRef<CreateAddressComponent>,
    private addressService: AddressService,
    private localityService: LocalityService,
  ) { 
    this.subs = [];
    this.initForm();
    this.getLocalities();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe);
  }
  
  private getLocalities(): void {
    let sub = this.localityService.getLocalities().subscribe({
      next: (res) => {
        console.log(res);
        this.localities = res;
        console.log(this.localities);
      }
    })
    this.subs.push(sub);
  }

  private initForm(): void {
    this.createAddressForm = new FormGroup({
      depId: new FormControl(0, Validators.required),
      avenida: new FormControl('', Validators.required),
      calle: new FormControl('', Validators.required),
      nombreDir: new FormControl('', Validators.required),
      zona: new FormControl(1, Validators.required),
      idMuni: new FormControl(0, Validators.required)
    });

    let sub = this.createAddressForm.get('depId')?.valueChanges.subscribe(
      {
        next: (res) => {
          this.onDepChange(res);
        }
      }
    );

  }

  private onDepChange(dep: any) {
    this.currentDep = dep;
    console.log(this.currentDep);
  }

  createAddress(): void {
    if (this.createAddressForm.valid) {
      let request = new CreateAddressRequest();
      request.ave = this.createAddressForm.get('avenida')?.value;
      request.cal = this.createAddressForm.get('calle')?.value;
      request.dirNom = this.createAddressForm.get('nombreDir')?.value;
      request.zon = this.createAddressForm.get('zona')?.value;
      request.muni = this.createAddressForm.get('idMuni')?.value;
      this.doCreateAddress(request);
    }
  }

  private doCreateAddress(request: CreateAddressRequest): void {
    let res = this.addressService.createAddress(request).subscribe({
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
