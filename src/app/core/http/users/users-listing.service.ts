import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersListingService {

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    ) { }
  
  url: string = this.config.apiEndpoint+"/api/users";
  data: any;
  getUsers() {
    this.http.get(this.url).subscribe(responce => {
      // console.log(responce);
      this.data = responce;
    });
  }

}
