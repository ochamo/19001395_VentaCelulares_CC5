import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NitResponse } from 'src/app/shared/model/response/nit.response';

@Component({
  selector: 'app-nit-list-item',
  templateUrl: './nit-list-item.component.html',
  styleUrls: ['./nit-list-item.component.scss']
})
export class NitListItemComponent implements OnInit {
  @Input()
  nitItem: NitResponse;
  @Output()
  emitUpdate: EventEmitter<NitResponse> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitUpdateEvent() {
    this.emitUpdate.emit(this.nitItem);
  }

}
