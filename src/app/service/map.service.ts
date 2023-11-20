import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(private _http: HttpClient) { }
  getMapData(): Observable<any> {
    const ROOT_PATH = 'https://echarts.apache.org/examples';

    return this._http.get(ROOT_PATH + '/data/asset/geo/USA.json');
  }
}
