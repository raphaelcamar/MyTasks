import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartDataSets } from 'chart.js';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { UserService } from 'src/app/services/user/user.service';
import { changeName } from 'src/helpers/changeName';
import { validations } from 'src/helpers/validation';
import { CardService } from '../../card/card.service';
import { HeaderService } from '../../header/header.service';
import { TableService } from '../../table/table.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  //   public lineChartData: ChartDataSetsets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  // ];

  user : User;
  tasks : Tasks[];
  hide : boolean = true;

  constructor(private taskService : TasksService, private cardService : CardService, private tableService : TableService) {}

  ngOnInit(): void {
   this.user = sessionStorage.getItem('logged') == null ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));
   
    this.taskService.read(this.user.id).subscribe(response =>{
      this.tableService.TableData = response;
      //  this.cardService.cardData = response
    });
  }
}