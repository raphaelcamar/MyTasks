import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { TableData } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _tableData = new BehaviorSubject<TableData[]>([]);

  user : User;

  constructor(private taskService : TasksService) { }

  get TableData(): TableData[]{
    return this._tableData.value;
  }

  set TableData(tableData : TableData[]){
    this._tableData.next(tableData)
  }
  // updateTable(){
  //   this.user = sessionStorage.getItem('logged') == null  ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));
  //   this.taskService.read(this.user.id).subscribe(items =>{
  //     this.TableData = items
  //   });
  // }
}