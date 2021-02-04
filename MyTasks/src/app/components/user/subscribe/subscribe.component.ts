import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import {validations} from '../../../../helpers/validation'
import { changeName } from 'src/helpers/changeName';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  user : User;
  formulary : FormGroup;
  hide = true;

  constructor(private userService : UserService, private router : Router, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.user = new User();
    this.formvalidation();
  }

  subscribe(){
    this.user = this.formulary.value
    this.user.name = changeName.upperCaseName(this.formulary.value.name);

       this.userService.create(this.user)
       .subscribe(resp =>{
        // console.log(resp)
        localStorage.clear();
        this.router.navigate(['/tasks']);
        localStorage.setItem('logged', JSON.stringify(resp));
       })   
  }

  formvalidation(){
    this.formulary = this.fb.group({
        name : ['', Validators.compose([
          
          validations.completeName])],
        cpf : ['',Validators.compose([ 
          
          validations.cpf])],
        email : ['',Validators.compose([
          
          Validators.email])],
        password : ['',Validators.compose([
          
          Validators.minLength(7),
          Validators.maxLength(15)])],
      }
    )
  }

  //Valores usados para pegar os erros dos inputs

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


}
