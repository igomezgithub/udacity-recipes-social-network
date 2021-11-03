import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const API_HOST = environment.apiHost;

@Injectable()
export class ApiService {
  token: string = '';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  static handleError(error: Error) {
    alert(error.message);
  }

  static extractData(res: HttpEvent<any>) {
    const body = res;
    return body || { };
  }

  setAuthToken(token: string) {
    // this.httpOptions.headers = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
    this.token = token;
  }

  async get(endpoint: any): Promise<any> {
    const url = `${API_HOST}${endpoint}`;
    const request = this.http.get(url, this.httpOptions).pipe(map(() => ApiService.extractData));

    return await request
            .toPromise()
            .catch((e: any) => {
              ApiService.handleError(e);
              throw e;
            });
  }

  async post(endpoint: any, data: any): Promise<any> {
    const url = `${API_HOST}${endpoint}`;
    console.log('URL: ', url);
    return await this.http.post<HttpEvent<any>>(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    })
            .toPromise()
            .catch((e: any) => {
              console.log('Post Error: ', e);
              ApiService.handleError(e);
              throw e;
            });
  }

  async upload(endpoint: string, file: File, payload: any): Promise<any> {
    const signed_url = (await this.get(`${endpoint}/signed-url/${file.name}`)).url;

    const headers = new HttpHeaders({'Content-Type': file.type});
    const req = new HttpRequest( 'PUT', signed_url, file,
                                  {
                                    headers: headers,
                                    reportProgress: true, // track progress
                                  });

    return await new Promise ( resolve => {
        this.http.request(req).subscribe((resp: any) => {
        if (resp && (<any> resp).status && (<any> resp).status === 200) {
          resolve(this.post(endpoint, payload));
        }
      });
    });
  }
}
