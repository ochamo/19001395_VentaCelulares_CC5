import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';
import { TokenService } from '../service/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements AuthInterceptor {

  constructor(
      private router: Router,
      private tokenService: TokenService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = this.tokenService.getToken();

      const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`).set('content-type', 'application/json')
      });

      return next.handle(headers)
      .pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
      if (error.status === 401) {
          this.router.navigate(['/login']);
          this.tokenService.clear();
          return of(error);
      } else {
          return throwError(() => error);
      }
  }

}