import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomToken, User, UserCred } from '../model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  baseURL:string="http://localhost:9090";

  constructor(private http:HttpClient) { 

  }


  public login(userCred:UserCred):Observable<CustomToken>{

    return this.http.post<CustomToken>(`${this.baseURL}/generate-token`,userCred);
  }


  public getCurrentUser():Observable<User>{
    return this.http.get<User>(`${this.baseURL}/current-user`);
  }


  public registerUser(user:User):Observable<string>{
   
    return this.http.post<string>(`${this.baseURL}/create`,user);
  }

  public logout(){
     return this.http.get(this.baseURL + '/logout');
  }
}