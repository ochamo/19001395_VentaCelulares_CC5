import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CellphoneResponse } from '../shared/model/response/cellphone.response';
import { CellphoneService } from '../shared/service/cellphone/cellphone.service';
import { TokenService } from '../shared/service/token/token.service';
import { SuccessDialogArgs, SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { CreatePhoneComponent } from './views/create-phone/create-phone.component';
import { MakePurchaseArgs, MakePurchaseViewComponent } from './views/make-purchase-view/make-purchase-view.component';
import { UpdateStockArgs, UpdateStockComponent } from './views/update-stock/update-stock.component';

@Component({
  selector: 'app-cellphones-list',
  templateUrl: './cellphones-list.component.html',
  styleUrls: ['./cellphones-list.component.scss']
})
export class CellphonesListComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  public listOfPhones: CellphoneResponse[] = [];

  constructor(
    private tokenService: TokenService,
    private dialog: MatDialog,
    private cellphoneService: CellphoneService
  ) {
    this.getPhones();
  }

  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe());
  }

  ngOnInit(): void {
  }

  isAdmin(): boolean {
    return this.tokenService.getRole() == 1;
  }

  openCreatePhone(): void {
    const ref = this.dialog.open(CreatePhoneComponent, {
      width: '500px',
      height: '500px'
    });

    const sub = ref.afterClosed().subscribe({
      next: (res) => {
        this.getPhones();
      }
    });
    this.subs.push(sub);
  }

  public showUpdateStock(event: number): void {
    const ref = this.dialog.open(UpdateStockComponent, {
      width: '500px',
      height: '300px',
      data: new UpdateStockArgs(event)
    });

    const sub = ref.afterClosed().subscribe({
      next: (res) => {
        this.getPhones();
      }
    });
    this.subs.push(sub);

  }

  getPhones(): void {
    let sub = this.cellphoneService.getCellphones().subscribe({
      next: (res) => {
        console.log(res);
        this.listOfPhones = res;
      }
    });

    this.subs.push(sub);
  }

  showPurchaseAction(event: CellphoneResponse) {
    console.log(event);
    const ref = this.dialog.open(MakePurchaseViewComponent, {
      width: '600px',
      height: '500px',
      data: new MakePurchaseArgs(event)
    });

    const sub = ref.afterClosed().subscribe({
      next: (res) => {
        this.dialog.open(SuccessDialogComponent, {
          width: '500px',
          data: new SuccessDialogArgs(
            'Gracias por tu compra 😀',
            'Tu factura estará llegando a tu correo electrónico'
          )
          
        });
        this.getPhones();
      }
    });
    this.subs.push(sub);  }

}
