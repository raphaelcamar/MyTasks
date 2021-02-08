import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { UserService } from 'src/app/services/user/user.service';
import { changeName } from 'src/helpers/changeName';
import { validations } from 'src/helpers/validation';
import { CardService } from '../../card/card.service';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  user : User;
  formulary : FormGroup;
  tasks : Tasks[];
  hide : boolean = true;

  constructor(private headerService : HeaderService, private userService : UserService, private fb : FormBuilder, private cardService : CardService, private taskService : TasksService) {}

  ngOnInit(): void {
    // this.user = JSON.parse(localStorage.getItem('logged')) != '' ? JSON.parse(localStorage.getItem('logged')) : '';
    

    // this.taskService.read(this.user.id)
    // .subscribe( resp =>{
    //   this.tasks = resp
    //   this.cardService.cardData = resp
    // })

    this.headerService.headerData = {
      title : 'Suas Informações!',
      isLogged : true,
      logout : true,
      nameUser : 'raphael',
      routeUrl : '',
      isAdm : true
    }

    // this.formValidation();
  }

  // formValidation(){
  //     this.formulary = this.fb.group({
  //       id : [this.user.id],
  //       name : [this.user.name, Validators.compose([
  //         Validators.required,
  //         validations.completeName])],
  //       cpf : [this.user.cpf, Validators.compose([
  //         Validators.required,
  //         validations.cpf])],
  //       email : [this.user.email, Validators.compose([
  //         Validators.required,
  //         Validators.email])],
  //       password : [this.user.password, Validators.compose([
  //         Validators.required,
  //         Validators.minLength(7),
  //         Validators.maxLength(15)])],
  //       isAdm : [this.user.isAdm, Validators.compose([
  //         Validators.required])]
  //     })
  // }

  // update():void{
  //   this.user = this.formulary.value
  //   this.userService.update(this.user)
  //   .subscribe(resp =>{
  //     localStorage.clear();
  //     localStorage.setItem('logged', JSON.stringify(this.user))
  //     this.userService.message('Usuário atualizado com sucesso!')
  //   })
  // }


  // get name(){
  //   return this.formulary.get('name')
  // }
  
  // get cpf(){
  //   return this.formulary.get('cpf')
  // }
  
  // get email(){
  //   return this.formulary.get('email')
  // }
  
  // get password(){
  //   return this.formulary.get('password')
  // }
  
  // get isAdm(){
  //   return this.formulary.get('isAdm')
  // }
}
