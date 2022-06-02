import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePurchaseRequest } from '../../model/request/create-purchase.request';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createPurchase(request: CreatePurchaseRequest): Observable<any> {
    return this.httpClient.post(environment.endpoint + '/Compra', request);
  }


}
