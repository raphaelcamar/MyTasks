import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  tasks : Tasks;
  constructor(
    private taskService : TasksService,
    @Inject(MAT_DIALOG_DATA) private task : Tasks){
      this.tasks = this.task
   }

  ngOnInit(): void {
    const {id} = JSON.parse(localStorage.getItem('logged')) == null ? JSON.parse(sessionStorage.getItem('logged')) : JSON.parse(localStorage.getItem('logged'));
    this.taskService.readById(id)
    .subscribe(resp =>{
      this.tasks = resp
    })

  }

  update():void{
     this.taskService.update(this.tasks)
     .subscribe(resp =>{
      this.taskService.message('Tarefa editada com sucesso!')
       
     });
  }
}
