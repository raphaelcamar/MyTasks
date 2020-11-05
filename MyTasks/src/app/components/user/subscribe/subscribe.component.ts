import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  user : User;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  subscribe(){
     this.userService.create(this.user)
     .subscribe(resp =>{
      localStorage.clear();
      this.router.navigate(['/tasks']);
      localStorage.setItem('logged', JSON.stringify(resp));
     })
  }

}
