import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegisterRequest } from '../shared/model/request/register.request';
import { UserService } from '../shared/service/user/user.service';
import { SuccessDialogArgs, SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup
  public error: string;
  private subs: Subscription[] = [];

  constructor(
    private router: Router,
    private registerUserService: UserService,
    private dialog: MatDialog
  ) { 
    this.initForm();
    this.error = "";
  }
  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe());
  }

  private initForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      dpi: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      dateOfBirth: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  public login() {
    this.router.navigate(['/login'])
  }

  public registerUser() {
    if (this.registerForm.valid) {
      let registerRequest = new RegisterRequest();
      registerRequest.corr = this.registerForm.get('email')?.value,
      registerRequest.noms = this.registerForm.get('name')?.value,
      registerRequest.apells = this.registerForm.get('lastname')?.value,
      registerRequest.fechaNaci = this.registerForm.get('dateOfBirth')?.value,
      registerRequest.dni = this.registerForm.get('dpi')?.value,
      registerRequest.passs = this.registerForm.get('pass')?.value
      this.createUser(registerRequest);
    }
  }

  private createUser(user: RegisterRequest) {
    let createSub = this.registerUserService.createUser(user).subscribe({
      next: (result) => {
        const ref = this.dialog.open(SuccessDialogComponent, {
          width: '500px',
          data: new SuccessDialogArgs(
            'Creación de cuenta',
            'Cuenta creada exitosamente'
          )
        });

        let dialogSub = ref.afterClosed().subscribe(result => {
          this.router.navigate(['/login']);
        });
        this.subs.push(dialogSub);
      },
      error: (e) => {
        this.error = e.error;
      }
    });
    this.subs.push(createSub);
  }
}
