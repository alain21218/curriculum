import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  post(url: string, body?: any, options?: any) {
    return this.httpClient.post(environment.api + url, body, options);
  }
  get(url: string, options?: any) {
    return this.httpClient.get(environment.api + url, options);
  }
  delete(url: string, options?: any) {
    return this.httpClient.delete(environment.api + url, options);
  }
  put(url: string, body?: any, options?: any)  {
    return this.httpClient.put(environment.api + url, body, options);
  }
}
