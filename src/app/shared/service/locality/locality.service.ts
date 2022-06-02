import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalityResponse } from '../../model/response/locality.response';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {

  constructor(
    private http: HttpClient
  ) { }

  getLocalities(): Observable<LocalityResponse[]> {
    return this.http.get<LocalityResponse[]>(environment.endpoint + '/Locality');
  }

}
