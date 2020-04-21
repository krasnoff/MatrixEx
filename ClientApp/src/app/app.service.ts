import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public postSignup(payload: any) {
    return this.http.post('/api/Signup/', payload).toPromise();
  }

  public login(payload: any) {
    return this.http.post('/api/Signin/', payload).toPromise();
  }
}
