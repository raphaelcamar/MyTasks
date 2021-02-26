import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter();

  constructor(private headerService : HeaderService, private router : Router) { }

  ngOnInit(): void {
  }

  get title():string{
    return this.headerService.headerData.title
  }

  get nameUser():string{

    return this.headerService.headerData.nameUser
  }

  get routeUrl():string{
    return this.headerService.headerData.routeUrl
  }



  logoutUser():void{
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/'])
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
}
