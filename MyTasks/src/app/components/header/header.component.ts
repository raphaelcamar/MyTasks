import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  get isLogged():boolean{
    return this.headerService.headerData.isLogged
  }

  get logout():boolean{
   return this.headerService.headerData.logout
  }

  logoutUser():void{
    console.log('Entrou aqui')
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
