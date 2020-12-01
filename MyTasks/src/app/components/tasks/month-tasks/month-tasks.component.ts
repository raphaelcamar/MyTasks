import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks.model';
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
  displayedColumns: string[];
  dataSource : Tasks[]

  constructor(private headerService : HeaderService, private tableService : TableService) { 
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
    const {month, tasks} = history.state.data
    this.month = changeDate.ReturningNameMonthByNumber(month);
    this.tasks = tasks
    this.dataSource = tasks

    this.tableService.TableData = this.tasks

    console.log(this.tasks)
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
    })
  }
}
