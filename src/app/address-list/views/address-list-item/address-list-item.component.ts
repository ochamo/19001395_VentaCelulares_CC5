import { Component, Input, OnInit } from '@angular/core';
import { AddressResponse } from 'src/app/shared/model/response/address.response';

@Component({
  selector: 'app-address-list-item',
  templateUrl: './address-list-item.component.html',
  styleUrls: ['./address-list-item.component.scss']
})
export class AddressListItemComponent implements OnInit {
  @Input()
  addressItem: AddressResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
