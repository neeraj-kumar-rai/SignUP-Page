import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserInputtService {

  constructor(private http:HttpClient){ }

  public doRegistration(user){ 
    console.log(user)
    return this.http.post("http://localhost:7070/create", user ,{responseType:'text' as 'json'});
  }

  public fetchRegistration(username){
    console.log(username) 
    return this.http.get("http://localhost:7070/fetch?userName="+username  , { responseType:'text' as 'json'});
  }
  
  public fetchNumber(number){
    console.log(number) 
    return this.http.get("http://numbersapi.com/"+number  , { responseType:'text' as 'json'});
  }
  
}
