import { Injectable } from '@angular/core';

export interface Credentials {
  id: '',
  token: ''
}

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  credentials: Credentials;

  constructor() { }
}
