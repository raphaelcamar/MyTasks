import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Counter } from 'src/app/models/counter.model';
import { Months } from 'src/app/models/month.model';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { UserService } from 'src/app/services/user/user.service';
import { getMonths } from 'src/helpers/getMonths';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit, AfterContentInit {

  dataTask        : Tasks         [];
  dataUser        : User          [];
  barChartData    : ChartDataSets [];

  barChartOptions : ChartOptions;
  pieChartOptions : ChartOptions;
  pieChartData    : number        [];

  counter : Counter
  arr : Months;
  isFinishedCounter : any

  constructor(private taskService : TasksService, private userService : UserService, private headerService : HeaderService) { }
  
  ngOnInit(): void {

    this.headerService.headerData = {
      isAdm : true,
      isLogged : true,
      logout : true,
      nameUser : 'Administrador',
      routeUrl : '',
      title : 'Dados do myTasks'
    }

    this.taskService.getAllTasks()
    .subscribe(resp =>{
       this.arr = getMonths.month(resp)
       this.counter = getMonths.getCountByMonth(this.arr);
       this.isFinishedCounter = getMonths.getCount(resp);
       this.pieChartData = [
        this.isFinishedCounter.finished,
        this.isFinishedCounter.canceled,
        this.isFinishedCounter.process,
        this.isFinishedCounter.notStarted
       ]
      //console.log(arr)
    })
  } 

    //AS OPÇÕES DEVEM SER CARREGADAS APÓS A CHAMADA NO BANCO E A DIVISÃO DOS VALORES

  ngAfterContentInit(): void {
    setTimeout(() =>{
      console.log(this.counter)
      this.barChartData = [
        //Finalizadas
        { 
          data: [ this.counter.Jan.finished, 
                  this.counter.Feb.finished, 
                  this.counter.Mar.finished, 
                  this.counter.Apr.finished, 
                  this.counter.May.finished, 
                  this.counter.Jun.finished, 
                  this.counter.Jul.finished, 
                  this.counter.Aug.finished, 
                  this.counter.Sep.finished, 
                  this.counter.Oct.finished, 
                  this.counter.Nov.finished, 
                  this.counter.Dec.finished,
                ], 
          label: 'Finalizadas', 
          backgroundColor : '#33C58B',
          hoverBackgroundColor : '#5BC59B'
        },
        //Canceladas
        { data: [ this.counter.Jan.canceled, 
                  this.counter.Feb.canceled, 
                  this.counter.Mar.canceled, 
                  this.counter.Apr.canceled, 
                  this.counter.May.canceled, 
                  this.counter.Jun.canceled, 
                  this.counter.Jul.canceled, 
                  this.counter.Aug.canceled, 
                  this.counter.Sep.canceled, 
                  this.counter.Oct.canceled, 
                  this.counter.Nov.canceled, 
                  this.counter.Dec.canceled,
                ],
          label: 'Canceladas', 
          backgroundColor: '#EF4E59',
          hoverBackgroundColor : '#EF7F86'
        },
        //Em processo
        { data: [2, 1, 1, 2, 3, 1, 2, 0.1, 2, 2, 0.1, 0.1], 
          label: 'Em Processo', 
          backgroundColor : '#3F51B5',
          hoverBackgroundColor : '#6470B5'
        },
        //Não iniciadas
        { data: [ this.counter.Jan.notStarted, 
                  this.counter.Feb.notStarted, 
                  this.counter.Mar.notStarted, 
                  this.counter.Apr.notStarted, 
                  this.counter.May.notStarted, 
                  this.counter.Jun.notStarted, 
                  this.counter.Jul.notStarted, 
                  this.counter.Aug.notStarted, 
                  this.counter.Sep.notStarted, 
                  this.counter.Oct.notStarted, 
                  this.counter.Nov.notStarted, 
                  this.counter.Dec.notStarted,
                ], 
          label: 'Não iniciadas', 
          backgroundColor : '#efa94e',
          hoverBackgroundColor : '#EFBE7F'
        },
      ]; 
  
      this.barChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'start',
          },
        },
      };
  
      this.pieChartOptions = {
        responsive : true,
        legend : {
          position : "top"
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              return label;
            },
          },
        }
      }
    }, 700 )

}


  //ano das tarefas cadastradas
  public barChartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public pieChartLabels: Label[] = ['Finalizadas', 'Canceladas', 'Em processo', 'Não inicidadas',];
  public pieChartLegend = true;
  public pieChartType: ChartType = 'pie';
  public pieChartColors = [{backgroundColor: ['#33C58B', '#EF4E59', '#3F51B5','#efa94e']}];









  // public barChartPlugins = [pluginDataLabels];

  //Colocar quantidade de tarefas cadastradas(data) em tal ano ()

  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
}