import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',

    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  user : User;
  finalizado : number = 0;
  naoIniciado : number = 0;
  emProcesso : number = 0;
  cancelado : number = 0;

  finalizado2020 : number = 0;
  naoIniciado2020 : number = 0;
  emProcesso2020 : number = 0;
  cancelado2020 : number = 0;

  finalizado2021 : number = 0;
  naoIniciado2021 : number = 0;
  emProcesso2021 : number = 0;
  cancelado2021 : number = 0;


  pieChartLabels: Label[] = [];
  pieChartData: number[] = [];
  pieChartType: ChartType = 'pie'
  pieChartLegend = true;
  pieChartColors;
  arr2020 : any = [];
  arr2021 : any = [];

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        
      },
    }
  };

  public barChartData: ChartDataSets[] = [];

  constructor(private taskService : TasksService) { }

  ngOnInit(): void {

    this.user = sessionStorage.getItem('logged') == null ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));

    this.taskService.read(this.user.id).subscribe( item => {

     item.filter(item => item.isFinished == 'Não iniciado' ? this.naoIniciado +=1 : '');
     item.filter(item => item.isFinished == 'Finalizado' ? this.finalizado +=1 : '');
     item.filter(item => item.isFinished == 'Em processo' ? this.emProcesso +=1 : '');
     item.filter(item => item.isFinished == 'Cancelado' ? this.cancelado +=1 : '');

     this.arr2020 = item.filter(item => item.data.toString().indexOf('2020') > -1);
     this.arr2021 = item.filter(item => item.data.toString().indexOf('2021') > -1);

     this.arr2020.filter(item => item.isFinished == 'Não iniciado' ? this.naoIniciado2020 +=1 : '');
     this.arr2020.filter(item => item.isFinished == 'Finalizado' ? this.finalizado2020 +=1 : '');
     this.arr2020.filter(item => item.isFinished == 'Em processo' ? this.emProcesso2020 +=1 : '');
     this.arr2020.filter(item => item.isFinished == 'Cancelado' ? this.cancelado2020 +=1 : '');

     this.arr2021.filter(item => item.isFinished == 'Não iniciado' ? this.naoIniciado2021 +=1 : '');
     this.arr2021.filter(item => item.isFinished == 'Finalizado' ? this.finalizado2021 +=1 : '');
     this.arr2021.filter(item => item.isFinished == 'Em processo' ? this.emProcesso2021 +=1 : '');
     this.arr2021.filter(item => item.isFinished == 'Cancelado' ? this.cancelado2021 +=1 : '');

     this.barChartData =[
      { data: [this.finalizado2020, this.finalizado2021], label: 'Finalizadas', backgroundColor : '#33C58B' },
      { data: [this.naoIniciado2020, this.naoIniciado2021], label: 'Não iniciadas', backgroundColor : '#EFA94E' },
      { data: [this.emProcesso2020, this.emProcesso2021], label: 'Em processo', backgroundColor : '#3F51B5' },
      { data: [this.cancelado2020, this.cancelado2021], label: 'Cancelado', backgroundColor : '#E8505B' },
    ];

    this.barChartLabels = ['2020', '2021'];


    this.pieChartLabels = ['Finalizadas', 'Em processo', 'Canceladas', 'Não iniciadas'];
    this.pieChartData = [this.finalizado, this.emProcesso, this.cancelado, this.naoIniciado];     
    this.pieChartColors = [
      {
        backgroundColor: ['#33C58B', '#3F51B5', '#E8505B', '#EFA94E'],
      },
    ];     

    });

  }


}
