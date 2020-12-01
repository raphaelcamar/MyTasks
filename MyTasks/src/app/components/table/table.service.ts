import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableData } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _tableData = new BehaviorSubject<TableData[]>([])

  constructor() { }

  get TableData(): TableData[]{
    return this._tableData.value;
  }

  set TableData(tableData : TableData[]){
    this._tableData.next(tableData)
  }
}