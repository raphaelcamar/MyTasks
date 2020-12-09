import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { changeDate } from 'src/helpers/changeDate';
import { changeName } from 'src/helpers/changeName';
import { HeaderService } from '../../header/header.service';
import { TableService } from '../../table/table.service';

@Component({
  selector: 'app-month-tasks',
  templateUrl: './month-tasks.component.html',
  styleUrls: ['./month-tasks.component.css']
})
export class MonthTasksComponent implements OnInit {

  tasks : Tasks[];
  month : string;
  finishedTasks : number = 0;
  progressTasks : number = 0;
  canceledTasks : number = 0;
  notStartedTasks : number = 0;
  displayedColumns: string[];
  dataSource : Tasks[];
  monthNumber : string;
  user : User;

  constructor(private headerService : HeaderService, private tableService : TableService, private tasksService : TasksService, private router : Router) { 

  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logged'));
    this.monthNumber = this.router.url.slice(19);

    this.month = changeDate.ReturningNameMonthByNumber(this.monthNumber);
    let user = JSON.parse(localStorage.getItem('logged'));
    this.tasksService.getTasksByMonthAndIdUser(user.id, this.monthNumber).subscribe(resp =>{
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

    this.headerService.headerData = {
      isAdm : this.user.isAdm,
      isLogged : true,
      nameUser : changeName.firstName(this.user.name),
      title : 'Tarefas Mensais',
      logout : true,
      routeUrl : ''
    }


  }
}
