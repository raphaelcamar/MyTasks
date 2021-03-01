import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { validations } from 'src/helpers/validation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User;
  formulary : FormGroup;

  constructor(private fb : FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    
    this.user = sessionStorage.getItem('logged') == null ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));
    this.formValidation();
  }

  formValidation(){
    this.formulary = this.fb.group({
      id : [this.user.id],
      name : [this.user.name, Validators.compose([
        Validators.required,
        validations.completeName])],
      cpf : [this.user.cpf, Validators.compose([
        Validators.required,
        validations.cpf])],
      email : [this.user.email, Validators.compose([
        Validators.required,
        Validators.email])],
      password : [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15)])],
      isAdm : [this.user.isAdm, Validators.compose([
        Validators.required])]
    })
  }
  update():void{
    this.user = this.formulary.value
    this.userService.update(this.user)
      .subscribe(resp =>{
        localStorage.clear();
        localStorage.setItem('logged', JSON.stringify(this.user))
        this.userService.message('Usuário atualizado com sucesso!')
    })
  }

  get name(){
    return this.formulary.get('name')
  }
  
  get cpf(){
    return this.formulary.get('cpf')
  }
  
  get email(){
    return this.formulary.get('email')
  }
  
  get password(){
    return this.formulary.get('password')
  }
  
  get isAdm(){
    return this.formulary.get('isAdm')
  }

}
