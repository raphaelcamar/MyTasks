import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;
  hide : boolean = true
  error : boolean;
  rememberMe : boolean;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logged'));
    
    if(!this.user){
      this.user = new User();
    }else{
      this.login();
    }
  }
  
  login():void{
    
    this.userService.login(this.user.email, this.user.password)
    .subscribe(resp =>{
      
      if(!resp[0]){
            this.error = true;
           }else{
            if(this.rememberMe){
              localStorage.setItem('logged', JSON.stringify(resp[0]));
            }
            this.router.navigate(['/user/infos'])
           }   
      })
  }

}