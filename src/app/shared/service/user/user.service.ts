import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../../model/request/login.request';
import { RegisterRequest } from '../../model/request/register.request';
import { AuthResponse } from '../../model/response/auth.response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  login(loginData: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(environment.endpoint + '/Login', loginData);
  }

  createUser(createUser: RegisterRequest): Observable<any> {
    return this.http.post(environment.endpoint + '/CreateAccount', createUser);
  }

}
