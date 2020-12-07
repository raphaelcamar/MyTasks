import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { changeDate } from 'src/helpers/changeDate';
import { HeaderService } from '../../header/header.service';
import { TableService } from '../../table/table.service';

@Component({
  selector: 'app-month-tasks',
  templateUrl: './month-tasks.component.html',
  styleUrls: ['./month-tasks.component.css']
})
export class MonthTasksComponent implements OnInit {

  tasks : Tasks[]
  month : string;
  finishedTasks : number = 0;
  progressTasks : number = 0;
  canceledTasks : number = 0;
  notStartedTasks : number = 0;
  displayedColumns: string[];
  dataSource : Tasks[];
  monthNumber : string

  constructor(private headerService : HeaderService, private tableService : TableService, private tasksService : TasksService, private router : Router) { 
    this.headerService.headerData = {
      isAdm : true,
      isLogged : true,
      nameUser : 'Raphael',
      title : 'Tarefas Mensais',
      logout : true,
      routeUrl : ''
    }
  }
  ngOnInit(): void {
    
    this.monthNumber =this.router.url.slice(19)
    
    console.log(this.monthNumber)
    this.month = changeDate.ReturningNameMonthByNumber(this.monthNumber);
    let user = JSON.parse(localStorage.getItem('logged'));
    this.tasksService.getTasksByMonth(user.id, this.monthNumber).subscribe(resp =>{
      console.log(resp)
      this.tasks = resp;
      this.dataSource = resp;
      this.tableService.TableData = resp;

      this.tasks.forEach(item =>{
      
        if(item.isFinished == 'Finalizado'){
          this.finishedTasks += 1;
        }
  
        if(item.isFinished == 'Em processo'){
          this.progressTasks += 1;
        }
        if(item.isFinished == 'Cancelado'){
          this.canceledTasks += 1;
        }
  
        if(item.isFinished == 'Não iniciado'){
          this.notStartedTasks +=1;
        }

      })
    })


  }
}
