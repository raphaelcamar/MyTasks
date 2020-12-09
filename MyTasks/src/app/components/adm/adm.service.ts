import { Injectable, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Injectable({
  providedIn: 'root'
})

//Será responsável por chamar o serviço, separar os dados em determinadas funções, para facilitar a visualização no data
export class AdmService implements OnInit {

  tasks : Tasks[]

  constructor(private taskService : TasksService) { }
  
  ngOnInit(): void {
    this.taskService.getTasksByMonth(1, '02')
    .subscribe(resp =>{
      console.log(resp)
      this.tasks = resp

    })
  }

  getJan():Tasks[]{

  return this.tasks
  }
  
}
