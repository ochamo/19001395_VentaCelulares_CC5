import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './shared/module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CellphonesListComponent } from './cellphones-list/cellphones-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { NitComponent } from './nit/nit.component';
import { CreateNitDialogComponent } from './nit/views/create-nit-dialog/create-nit-dialog.component';
import { NitListItemComponent } from './nit/views/nit-list-item/nit-list-item.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { UserService } from './shared/service/user/user.service';
import { NitService } from './shared/service/nit/nit.service';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { LoginGuard } from './shared/guard/login.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { PhoneItemComponent } from './cellphones-list/views/phone-item/phone-item.component';
import { CreatePhoneComponent } from './cellphones-list/views/create-phone/create-phone.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './address-list/views/create-address/create-address.component';
import { AddressListItemComponent } from './address-list/views/address-list-item/address-list-item.component';
import { LocalityService } from './shared/service/locality/locality.service';
import { UpdateStockComponent } from './cellphones-list/views/update-stock/update-stock.component';
import { MakePurchaseViewComponent } from './cellphones-list/views/make-purchase-view/make-purchase-view.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CellphonesListComponent,
    NavbarComponent,
    NotAuthorizedComponent,
    NitComponent,
    CreateNitDialogComponent,
    NitListItemComponent,
    SuccessDialogComponent,
    PhoneItemComponent,
    CreatePhoneComponent,
    AddressListComponent,
    CreateAddressComponent,
    AddressListItemComponent,
    UpdateStockComponent,
    MakePurchaseViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    LoginGuard,
    AuthGuard,
    UserService,
    NitService,
    LocalityService
  ],
  entryComponents: [CreateAddressComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
