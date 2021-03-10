import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { IconPipe } from 'src/app/pipes/icon.pipe';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { changeDate } from 'src/helpers/changeDate';
import { CardService } from '../../card/card.service';
import { DeleteComponent } from '../../tasks/delete/delete.component';
import { UpdateComponent } from '../../tasks/update/update.component';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
})
export class DashboardsComponent implements OnInit {

  user : User;
  finishedTasks : Tasks[];
  todayTasks : Tasks[];
  lastTasks : Tasks[];
  date : Date;
  tasks : Tasks[];

  finalizadasPorc : string
  naoIniciadoPorc : string
  canceladoPorc : string
  andamentoPorc : string

  constructor(private taskService : TasksService, private dialog : MatDialog, private cardService : CardService) { }

  ngOnInit(): void {

    this.user = sessionStorage.getItem('logged') == null ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));

    this.loadFinishedTasks();
    this.loadTasks();
    this.loadLastTasks();
    // this.porc();

    // const formatted = changeDate.getDate();

  }

  loadFinishedTasks(){

    this.taskService.getIsFinished(this.user.id, 'Finalizado').subscribe(result =>{
      result.reverse();
      
      this.finishedTasks = result.slice(0, 10);

    });
  }

  porc(){
    const length = this.tasks.length;
    let cont : number = 0
    let cont1 : number = 0
    let cont2 : number = 0
    let cont3 : number = 0
    console.log(this.tasks);
    this.tasks.filter(item => item.isFinished == 'Finalizado' ? cont += 1 : '')
    this.tasks.filter(item => item.isFinished == 'Não iniciado' ? cont1 += 1 : '')
    this.tasks.filter(item => item.isFinished == 'Cancelado' ? cont2 += 1 : '')
    this.tasks.filter(item => item.isFinished == 'Em processo' ? cont3 += 1 : '')
    cont = cont * 100 / length;
    cont1 = cont1 * 100 / length;
    cont2 = cont2 * 100 / length;
    cont3 = cont3 * 100 / length;
    this.finalizadasPorc = cont.toFixed(2).toString() + '%';
    this.naoIniciadoPorc = cont1.toFixed(2).toString() + '%';
    this.canceladoPorc = cont2.toFixed(2).toString() + '%';
    this.andamentoPorc = cont3.toFixed(2).toString() + '%';
  }

  loadTasks(){
    this.taskService.read(this.user.id).subscribe(result =>{
      this.tasks = result;
      this.cardService.cardData = result;
      this.porc();
    })
  }

  calculate(item : Tasks){

  }

  loadLastTasks(){
    this.taskService.read(this.user.id).subscribe(result =>{
      result.reverse();
      this.lastTasks = result.slice(0, 15);
    })
  }

  update(task : Tasks){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data : task
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.ngOnInit();
      this.loadTasks();
    })
  }

  delete(task : Tasks){
    
    const dialogRef = this.dialog.open(DeleteComponent, {
       data : task
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.ngOnInit();
      this.loadTasks();
    })
  }
}






























































 
// public pieChartOptions: ChartOptions = {
//   responsive: true,
//   legend: {
//     position: 'top',

//   },
//   plugins: {
//     datalabels: {
//       formatter: (value, ctx) => {
//         const label = ctx.chart.data.labels[ctx.dataIndex];
//         return label;
//       },
//     },
//   }
// };

// user : User;
// finalizado : number = 0;
// naoIniciado : number = 0;
// emProcesso : number = 0;
// cancelado : number = 0;

// finalizado2020 : number = 0;
// naoIniciado2020 : number = 0;
// emProcesso2020 : number = 0;
// cancelado2020 : number = 0;

// finalizado2021 : number = 0;
// naoIniciado2021 : number = 0;
// emProcesso2021 : number = 0;
// cancelado2021 : number = 0;


// pieChartLabels: Label[] = [];
// pieChartData: number[] = [];
// pieChartType: ChartType = 'pie'
// pieChartLegend = true;
// pieChartColors;
// arr2020 : any = [];
// arr2021 : any = [];

// public barChartLabels: Label[] = [];
// public barChartType: ChartType = 'bar';
// public barChartLegend = true;

// public barChartOptions: ChartOptions = {
//   responsive: true,
//   scales: { xAxes: [{}], yAxes: [{}] },
//   plugins: {
//     datalabels: {
//       anchor: 'end',
//       align: 'end',
      
//     },
//   }
// };

// public barChartData: ChartDataSets[] = [];

// constructor(private taskService : TasksService) { }

// ngOnInit(): void {

//   this.user = sessionStorage.getItem('logged') == null ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));

//   this.taskService.read(this.user.id).subscribe( item => {

//    item.filter(item => this.filterItems(item));

//    this.arr2020 = item.filter(item => item.data.toString().indexOf('2020') > -1);
//    this.arr2021 = item.filter(item => item.data.toString().indexOf('2021') > -1);

//    this.arr2020.filter(item => this.filterItems2020(item));


//    this.arr2021.filter(item => this.filterItems2021(item));

//    this.barChartData =[
//     { data: [this.finalizado2020, this.finalizado2021], label: 'Finalizadas', backgroundColor : 'rgba(51,197,139, .6)', hoverBackgroundColor: '#33C58B', borderColor : '#33C58B', borderWidth : 2, hoverBorderColor : '#33C58B' },
//     { data: [this.naoIniciado2020, this.naoIniciado2021], label: 'Não iniciadas', backgroundColor : 'rgba(239,169,78, .6)', hoverBackgroundColor: '#EFA94E', borderColor : '#EFA94E', borderWidth : 2, hoverBorderColor : '#EFA94E'  },
//     { data: [this.emProcesso2020, this.emProcesso2021], label: 'Em processo', backgroundColor : 'rgba(63,81,181, .6)', hoverBackgroundColor: '#3F51B5', borderColor : '#3F51B5', borderWidth : 2, hoverBorderColor : '#3F51B5'  },
//     { data: [this.cancelado2020, this.cancelado2021], label: 'Cancelado', backgroundColor : 'rgba(239,78,89, .6)', hoverBackgroundColor: '#EF4E59', borderColor : '#EF4E59', borderWidth : 2, hoverBorderColor : '#EF4E59'  },
//   ];

//   this.barChartLabels = ['2020', '2021'];


//   this.pieChartLabels = ['Finalizadas', 'Em processo', 'Canceladas', 'Não iniciadas'];
//   this.pieChartData = [this.finalizado, this.emProcesso, this.cancelado, this.naoIniciado];     
//   this.pieChartColors = [
//     {
//       backgroundColor: ['#33C58B', '#3F51B5', '#E8505B', '#EFA94E'],

      
//     },
//   ]    

//   });

// }

// filterItems(item){

//   item.isFinished == 'Não iniciado' ? this.naoIniciado +=1 : '';
//   item.isFinished == 'Finalizado' ? this.finalizado +=1 : '';
//   item.isFinished == 'Em processo' ? this.emProcesso +=1 : '';
//   item.isFinished == 'Cancelado' ? this.cancelado +=1 : '';

// }

// filterItems2020(item){

//   item.isFinished == 'Não iniciado' ? this.naoIniciado2020 +=1 : '';
//   item.isFinished == 'Finalizado' ? this.finalizado2020 +=1 : '';
//   item.isFinished == 'Em processo' ? this.emProcesso2020 +=1 : '';
//   item.isFinished == 'Cancelado' ? this.cancelado2020 +=1 : ''

// }

// filterItems2021(item){

//   item.isFinished == 'Não iniciado' ? this.naoIniciado2021 +=1 : '';
//   item.isFinished == 'Finalizado' ? this.finalizado2021 +=1 : '';
//   item.isFinished == 'Em processo' ? this.emProcesso2021 +=1 : '';
//   item.isFinished == 'Cancelado' ? this.cancelado2021 +=1 : '';

// }
