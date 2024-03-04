import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  severUrl: any;
  constructor(private http: HttpClient) { }

  public load(url: string): any {
    return new Promise((resolve) => {
      this.http.get(url).pipe(map((res) => res))
        .subscribe(config => {
        this.severUrl = config;
          resolve(config);
        });
    });
  }

  getConfiguration() {
    return this.severUrl;    
  }
}
