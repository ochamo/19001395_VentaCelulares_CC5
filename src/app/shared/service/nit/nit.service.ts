import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateNitRequest } from '../../model/request/create-nit.request';
import { NitResponse } from '../../model/response/nit.response';

@Injectable({
  providedIn: 'root'
})
export class NitService {

  constructor(
    private http: HttpClient
  ) { }

  createNit(nit: CreateNitRequest): Observable<any> {
    return this.http.post(environment.endpoint + '/Nit', nit);
  }

  getNits(): Observable<NitResponse[]> {
    return this.http.get<NitResponse[]>(environment.endpoint + '/Nit');
  }

}
