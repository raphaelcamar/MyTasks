import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../components/header/header.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  sideBarOpen : boolean = false;
  titleHeader : string;

  constructor(public headerService : HeaderService) {

    this.headerService.headerData = {
      isAdm : false,
      isLogged : true,
      logout : true,
      nameUser : 'Raphael',
      routeUrl : '',
      title : ''
    }

   }

   
  ngOnInit(): void {
    
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
  catchTitle(value : string){
    this.headerService.headerData.title = value;
  }

}
