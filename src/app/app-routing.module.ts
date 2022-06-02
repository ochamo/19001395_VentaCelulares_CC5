import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { CellphonesListComponent } from './cellphones-list/cellphones-list.component';
import { LoginComponent } from './login/login.component';
import { NitComponent } from './nit/nit.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ClientGuard } from './shared/guard/client.guard';
import { LoginGuard } from './shared/guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'cellphones',
    component: CellphonesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nit',
    component: NitComponent,
    canActivate: [ClientGuard]
  },
  {
    path: 'addresses',
    component: AddressListComponent,
    canActivate: [ClientGuard]
  },
  {
    path: 'notAuthorized',
    component: NotAuthorizedComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
