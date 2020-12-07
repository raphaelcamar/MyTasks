import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  dataTask    : Tasks         [];
  dataUser    : User          [];
  barChartData: ChartDataSets [];

  barChartOptions: ChartOptions;

  finishedTasks   : number = 0;
  canceledTasks   : number = 0;
  processTasks    : number = 0;
  notStartedTasks : number = 0;


  constructor(private taskService : TasksService, private userService : UserService) { }



  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe( resp =>{
      this.dataTask = resp;
      this.getStatusTasks();

      this.barChartData = [
        //Finalizadas
        { 
          data: [25, 59, 80, 81, 56, 55, 40, 30, 59, 25, 46, 12], 
          label: 'Finalizadas', 
          backgroundColor : '#33C58B',
          hoverBackgroundColor : '#5BC59B'
        },
        //Canceladas
        { data: [10, 48, 40, 19, 86, 27, 130, 20, 34, 45, 56, 20],
          label: 'Canceladas', 
          backgroundColor: '#EF4E59',
          hoverBackgroundColor : '#EF7F86'
        },
        //Em processo
        { data: [139, 50, 21, 19, 86, 27, 50, 20, 45, 20, 15, 80], 
          label: 'Em Processo', 
          backgroundColor : '#3F51B5',
          hoverBackgroundColor : '#6470B5'
        },
        //Não iniciadas
        { data: [100, 50, 20, 19, 86, 27, 51, 56, 59, 70, 93, 150], 
          label: 'Não iniciadas', 
          backgroundColor : '#efa94e',
          hoverBackgroundColor : '#EFBE7F'
        },
      ];
    })
    
    

    //AS OPÇÕES DEVEM SER CARREGADAS APÓS A CHAMADA NO BANCO E A DIVISÃO DOS VALORES
    setTimeout(()=>{
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
    }, 500)

    this.userService.getAllUsers().subscribe(resp =>{
      this.dataUser = resp
    })
  }

  getStatusTasks(){
    this.dataTask.forEach(item =>{
      if(item.isFinished == 'Finalizado'){
        this.finishedTasks += 1
      }
      if(item.isFinished == 'Cancelado'){
        this.canceledTasks += 1
      }
      if(item.isFinished == 'Em processo'){
        this.processTasks += 1
      }
      if(item.isFinished == 'Não iniciado'){
        this.notStartedTasks += 1
      }
    })
  }
  //ano das tarefas cadastradas
  public barChartLabels: Label[] = ['Janeiro', 'Fevereriro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  public barChartType: ChartType = 'bar';
  // public barChartType2: ChartType = 'pie';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];




  
  //label do canto esquerdo e Título logo acima
  //Colocar quantidade de tarefas cadastradas(data) em tal ano ()

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }
}