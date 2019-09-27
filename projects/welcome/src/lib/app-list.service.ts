import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProxyApi, BackendService } from '@uxp/framework';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppListService {
  proxyApi: ProxyApi;

  constructor(
    private http: HttpClient,
    private backendService : BackendService,
  ) { 
    this.proxyApi = this.backendService.proxyApi;
  }

  get() {
    const key = '7c39d510'
    const params = new HttpParams()
      .set('serviceId', 'Mockaroo')
      .set('target', `app_list.json?key=${key}`)
      ;

    return this.http.get(this.proxyApi.rootPath, { params }).pipe(
      map(response => (response as Tile[]))
    );
  }
}

export interface Tile {
  color: string;
  text: string;
}

export interface Section {
  name: string;
  updated: string;
  icon: string;
}