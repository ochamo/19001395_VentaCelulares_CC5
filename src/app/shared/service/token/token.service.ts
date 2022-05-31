import { Injectable } from '@angular/core';
import { AuthResponse } from '../../model/response/auth.response';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  getToken(): string {
    let token = localStorage.getItem('t');
    if (token == null) return '';
    return token;
  }
  getId(): number {
    let id = localStorage.getItem('xyz');
    if (id == null) return -1;
    return parseInt(id);
  }

  saveAuth(auth: AuthResponse): void {
    localStorage.setItem('t', auth.jwt);
    localStorage.setItem('xyz', `${auth.xyz}`);
    localStorage.setItem('yyz', `${auth.yyz}`);
  }

  getRole(): number {
    let id = localStorage.getItem('yyz');
    if (id == null) return -1;
    return parseInt(id);
  }

  clear(): void {
    localStorage.clear();
  }

  private tokenExpired(): boolean {
    let token = this.getToken();
        if (token === "") {
            return true;
        }
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        const calc = (Math.floor((new Date).getTime() / 1000))
        const result = calc >= expiry;
        return result;
  }

  isLoggedIn(): boolean {
    if (!this.tokenExpired()) {
        return true;
    } else {
        return false;
    }
}

}
