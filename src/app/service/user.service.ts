import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Store/Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

   APIBaseUrl='http://localhost:3000/user'

   UserRegistration(userdata:Users){
    return this.http.post(this.APIBaseUrl,userdata)
   }
}
