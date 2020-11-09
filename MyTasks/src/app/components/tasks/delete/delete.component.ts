import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  tasks : Tasks;

  constructor(private route : ActivatedRoute, 
              private router : Router, 
              private taskService : TasksService, 
              @Inject(MAT_DIALOG_DATA) private task : Tasks){
                this.tasks = this.task.task
   }
   
  ngOnInit(): void {
    const {id} = JSON.parse(localStorage.getItem('logged'));
    this.taskService.readById(id)
    .subscribe(resp =>{
      this.tasks = resp
    })
  }

  delete():void{
    this.taskService.delete(this.tasks.id)
      .subscribe(resp =>{
        this.taskService.message('Tarefa deletada com sucesso!')
    })
  }
}
