import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _tableData = new BehaviorSubject<TableData>({
   name : '',
   description : '',
   data : new Date(),
   isFinished : '',
   importance : '',

  })

  constructor() { }

  get TableData(): TableData{
    return this._tableData.value
  }

  set TableData(tableData : TableData){
    this._tableData.next(tableData)
  }

}
