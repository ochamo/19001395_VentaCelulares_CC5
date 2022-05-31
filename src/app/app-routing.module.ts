import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphonesListComponent } from './cellphones-list/cellphones-list.component';
import { LoginComponent } from './login/login.component';
import { NitComponent } from './nit/nit.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { RegisterComponent } from './register/register.component';
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
  },
  {
    path: 'nit',
    component: NitComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'notAuthorized',
    component: NotAuthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
