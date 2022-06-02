import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateAddressRequest } from '../../model/request/create-address.request';
import { AddressResponse } from '../../model/response/address.response';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient
  ) { }

  getAddresses(): Observable<AddressResponse[]> {
    return this.http.get<AddressResponse[]>(environment.endpoint + '/GetAddresses');
  }

  createAddress(request: CreateAddressRequest): Observable<any> {
    return this.http.post(environment.endpoint + '/Address', request);
  }


}
