import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Tasks } from 'src/app/models/tasks.model';
import { DeleteComponent } from '../tasks/delete/delete.component';
import { UpdateComponent } from '../tasks/update/update.component';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource : any[] = []
  displayedColumns = ['name', 'description', 'data', 'isFinished', 'importance', 'edit', 'delete'];
  sortedData: Tasks[];

  constructor(private tableService : TableService, private dialog : MatDialog) {

    this.sortedData = this.dataSource.slice();
   }

  ngOnInit(): void {
    setTimeout(()=>{
      this.dataSource = this.tableService.TableData
    }, 1000)
  }

  openDialogDelete(id : number):void{
    
    const task = this.dataSource.filter(task => task.id == id);
    const dialogRef = this.dialog.open(DeleteComponent, {
       data : task[0]
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.ngOnInit();
    })
  }

  openDialogUpdate(id : number):void{
    const task = this.dataSource.filter(task => task.id == id);

    const dialogRef = this.dialog.open(UpdateComponent, {
      data : task[0]
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.dataSource = this.tableService.TableData
    })
  }
  
}

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
