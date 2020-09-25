import { Component, OnInit } from '@angular/core';
import {UserServiceService} from'./../user-service.service'
import {User} from'./../user'
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
 
  user : any = {}
  messages :any=[]
  constructor(private service:UserServiceService) { }

  public register(){
      let resp=this.service.registration(this.user);
      resp.subscribe((data)=>this.messages=data);
      console.log(this.messages[0])
  }
  ngOnInit() {
    
  }

}
