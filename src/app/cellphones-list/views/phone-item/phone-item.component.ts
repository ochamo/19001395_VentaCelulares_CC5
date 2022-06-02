import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellphoneResponse } from 'src/app/shared/model/response/cellphone.response';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent implements OnInit {
  @Input()
  phoneItem: CellphoneResponse;
  @Input()
  isAdmin: boolean;

  @Output()
  emitStockEvent = new EventEmitter<number>();

  @Output()
  emitPurchaseEvent = new EventEmitter<CellphoneResponse>();

  @Output()
  emitUpdateEvent = new EventEmitter<CellphoneResponse>();
  constructor() { }

  ngOnInit(): void {
  }

  emitUpdateStockEvent() {
    this.emitStockEvent.emit(this.phoneItem.idCelular);
  }
  emitUpdatePhoneEvent() {
    this.emitUpdateEvent.emit(this.phoneItem);
  }

  emitPurchaseIntentionEvent() {
    this.emitPurchaseEvent.emit(this.phoneItem);
  }

}
