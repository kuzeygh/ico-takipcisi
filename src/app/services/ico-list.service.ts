import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { Ico } from '../models/ico.model';

@Injectable()
export class IcoListService {

  constructor(private http: Http) { }

  public getIcos(): Observable<Ico[]> {
    return this.http.get("assets/ico-list.json").map((res: any) => res.json());
  }
}
