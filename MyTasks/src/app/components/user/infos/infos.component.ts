import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { changeName } from 'src/helpers/changeName';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  user : User

  constructor(private headerService : HeaderService, private userService : UserService) {

    this.user = JSON.parse(localStorage.getItem('logged'))


    this.headerService.headerData = {
      title : 'Suas Informações!',
      isLogged : true,
      logout : true,
      nameUser : changeName(this.user.name),
      routeUrl : ''
    }
   }

 

  ngOnInit(): void {

  }

  update():void{
    this.userService.update(this.user)
    .subscribe(resp =>{
      localStorage.clear();
      localStorage.setItem('logged', JSON.stringify(this.user))
    })
  }


}
