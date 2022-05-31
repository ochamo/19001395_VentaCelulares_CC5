import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../shared/model/request/login.request';
import { CELLPHONES_ROUTE } from '../shared/routes/routes';
import { TokenService } from '../shared/service/token/token.service';
import { UserService } from '../shared/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  userNotFoundMessage: boolean;

  constructor(
    private router: Router,
    private loginService: UserService,
    private tokenService: TokenService
  ) { 
    this.initForm();
    this.userNotFoundMessage = false;
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public registerUser() {
    this.router.navigate(['/register']);
  }

  public login() {
    if (this.loginForm.valid) {
      let loginRequest = new LoginRequest(
        this.loginForm.get('userName')?.value,
        this.loginForm.get('pass')?.value
        );
      this.doLogin(loginRequest);
    }
  }

  private doLogin(loginRequest: LoginRequest) {
    this.loginService.login(loginRequest)
      .subscribe({
        next: (res) => {
          console.log(`RES ${JSON.stringify(res)}`);
          this.tokenService.saveAuth(res);
          this.router.navigate([CELLPHONES_ROUTE]);

        },
        error: this.handleError
      });
  }

  private handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
    } else {
      console.log(error);
      this.userNotFoundMessage = true;
    }
  }

}
