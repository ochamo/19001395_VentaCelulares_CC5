import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddressResponse } from '../shared/model/response/address.response';
import { AddressService } from '../shared/service/address/address.service';
import { CreateAddressComponent } from './views/create-address/create-address.component';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  listOfAddress: AddressResponse[] = [];
  constructor(
    private addressService: AddressService,
    private dialog: MatDialog
  ) {
    this.getAddresses();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subs.forEach(it => it.unsubscribe());
  }

  openCreateAddress(): void {
    const ref = this.dialog.open(CreateAddressComponent, {
      width: '500px',
      height: '500px'
    });
    const sub = ref.afterClosed().subscribe({
      next: (res) => {
        this.getAddresses();
      }
    });
    this.subs.push(sub);
  }

  getAddresses(): void {
    let sub = this.addressService.getAddresses().subscribe({
      next: (res) => {
        this.listOfAddress = res;
      }
    });
    this.subs.push(sub);
  }

}
