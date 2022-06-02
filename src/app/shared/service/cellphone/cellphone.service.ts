import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateCellphoneRequest } from '../../model/request/create-cellphone.request';
import { UpdatePhoneRequest } from '../../model/request/update-phone.request';
import { UpdateStockRequest } from '../../model/request/update-stock.request';
import { CellphoneResponse } from '../../model/response/cellphone.response';

@Injectable({
  providedIn: 'root'
})
export class CellphoneService {
  
  constructor(
    private http: HttpClient
  ) { }

  getCellphones(): Observable<CellphoneResponse[]> {
    return this.http.get<CellphoneResponse[]>(environment.endpoint + '/Cellphone');
  }

  createCellphone(request: CreateCellphoneRequest): Observable<any> {
    return this.http.post(environment.endpoint + '/Cellphone', request);
  }

  updateStock(request: UpdateStockRequest): Observable<any> {
    return this.http.put(environment.endpoint + '/Stock', request);
  }
  
  update(request: UpdatePhoneRequest): Observable<any> {
    return this.http.put(environment.endpoint + '/Cellphone', request);
  }

}
