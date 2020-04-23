import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, protected gd: GlobalsService) { }

  private createAuthorizationHeader() {

    let headers = new HttpHeaders();

    if (this.gd.credentials.token !== '') {
      headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.gd.credentials.token });
    }

    return headers;
    
  }

  public postSignup(payload: any) {
    return this.http.post('/api/Signup/', payload).toPromise();
  }

  public login(payload: any) {
    return this.http.post('/api/Signin/', payload).toPromise();
  }

  public getCategories() {
    let headers = this.createAuthorizationHeader();
    return this.http.get('/api/Categories/', { headers: headers }).toPromise();
  }

  public getClips() {
    let headers = this.createAuthorizationHeader();
    return this.http.get('/api/Clips/', { headers: headers }).toPromise();
  }

  public addClip(payload: any) {
    let headers = this.createAuthorizationHeader();
    return this.http.post('/api/Clips/', payload, { headers: headers }).toPromise();
  }
}
