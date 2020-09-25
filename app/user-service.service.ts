import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './user'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  public registration(user : User[]){
        
    console.log(user)

    return this.http.post("https://reqres.in/api/register",user);
  }
}
