import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  serverUrl: any;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.serverUrl = this.configService.getConfiguration().apiUrl;
  }

  get(endPoint: any): Observable<any> {
    return this.http.get(`${this.serverUrl}` + `${endPoint}`);
  }
}
