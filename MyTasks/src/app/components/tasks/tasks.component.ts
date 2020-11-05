import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { changeName } from 'src/helpers/changeName';
import { HeaderService } from '../header/header.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Tasks;
  allTasks : Tasks[];
  user : User

  constructor(private taskServie : TasksService, private route : ActivatedRoute, private headerService :  HeaderService) { 

    this.user = JSON.parse(localStorage.getItem('logged'));
    
    
    headerService.headerData = {
      title : 'Suas Tarefas!',
      isLogged : true,
      logout : true,
      nameUser : changeName(this.user.name),
      routeUrl : ''
    }
  }

  ngOnInit(): void {
  this.user = JSON.parse(localStorage.getItem('logged'));
  const {id} = this.user

  this.tasks = new Tasks();
  
  this.tasks.idUser = id;

  this.taskServie.read(id)
  .subscribe(resp =>{
    this.allTasks = resp;
    });
  }

  addTask(){
    this.taskServie.create(this.tasks)
    .subscribe(resp =>{
      this.taskServie.read(this.tasks.idUser)
    .subscribe(resp =>{
      this.allTasks = resp;
    });
    });
  }

}
