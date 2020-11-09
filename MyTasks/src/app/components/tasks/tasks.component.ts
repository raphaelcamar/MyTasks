import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { changeName } from 'src/helpers/changeName';
import { validations } from 'src/helpers/validation';
import { HeaderService } from '../header/header.service'
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Tasks;
  allTasks : Tasks[];
  user : User;
  formulary : FormGroup;

  constructor(private taskService : TasksService, private route : ActivatedRoute, private headerService :  HeaderService, private dialog : MatDialog, private fb : FormBuilder) { 

    this.user = JSON.parse(localStorage.getItem('logged'));
    
    
    headerService.headerData = {
      title : 'Suas Tarefas!',
      isLogged : true,
      logout : true,
      nameUser : changeName.firstName(this.user.name),
      routeUrl : ''
    }
  }

  ngOnInit(): void {
  this.user = JSON.parse(localStorage.getItem('logged'));
  const {id} = this.user

  this.tasks = new Tasks();
  
  this.tasks.idUser = id;

  this.taskService.read(id)
  .subscribe(resp =>{
    this.allTasks = resp;
    });
    console.log(this.tasks)

    this.formValidation();
  }

  addTask(){

    const id = this.tasks.idUser;
    this.tasks = this.formulary.value
    this.tasks.idUser = id;
    console.log(this.tasks)

     this.taskService.create(this.tasks)
     .subscribe(resp =>{
       this.ngOnInit();
  
     });
  }

  openDialogDelete(id : number):void{
    
    const task = this.allTasks.filter(task => task.id == id);

    const dialogRef = this.dialog.open(DeleteComponent, {
       data : {
        task : task[0]
       }
     });
     dialogRef.afterClosed().subscribe(result =>{
        this.ngOnInit();
     })
  }

  openDialogUpdate(id : number):void{
    const task = this.allTasks.filter(task => task.id == id);

    const dialogRef = this.dialog.open(UpdateComponent, {
      data : {
        task : task[0]
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.ngOnInit();
    })

  }

  formValidation(){
    this.formulary = this.fb.group({
      name : ['', Validators.compose([
        Validators.required,
        validations.completeName])],
      description : ['', Validators.compose([
        Validators.required,
        validations.completeName])],
      data : ['', Validators.compose([
        Validators.required
      ])],
      isFinished : ['', Validators.compose([
        Validators.required])],
      importance : ['',Validators.compose([
        Validators.required,
        Validators.maxLength(35)
      ])],
    })
  }
}