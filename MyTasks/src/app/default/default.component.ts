import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../components/header/header.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  sideBarOpen : boolean = false;
  titleHeader : string;
  user : User;
  mode : string
  hasBackdrop : string;

  constructor(public headerService : HeaderService) {}

   
  ngOnInit(): void {
    this.mode = 'side';
    this.user = sessionStorage.getItem('logged') == null  ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));

    this.headerService.headerData = {
      nameUser : this.user.name,
      routeUrl : '',
      title : ''
    }

    this.listener();
    
  }

  listener(){
      if(window.outerWidth < 1200){
        this.mode = 'over'
        this.hasBackdrop = 'true'
      }
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
  catchTitle(value : string){
    this.headerService.headerData.title = value;
  }

}
