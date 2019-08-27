import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiEndpoint: string = "https://reqres.in";
  token: string = "";

  constructor() { }
}
