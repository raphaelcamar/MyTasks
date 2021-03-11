import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Tasks } from 'src/app/models/tasks.model';
import { User } from 'src/app/models/user.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { DeleteComponent } from '../tasks/delete/delete.component';
import { UpdateComponent } from '../tasks/update/update.component';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Tasks>;
  dataSource: DataTableDataSource;
  user : User;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'description', 'data', 'isFinished', 'importance', 'edit', 'delete'];

  constructor(private taskService : TasksService, private dialog : MatDialog){}

  ngOnInit() {
    this.user = sessionStorage.getItem('logged') == null ? JSON.parse(localStorage.getItem('logged')) : JSON.parse(sessionStorage.getItem('logged'));
    this.taskService.read(this.user.id).subscribe(result =>{
      this.dataSource = new DataTableDataSource(result);
      
    });
  }

  openDialogDelete(task : Tasks):void{
    
    const dialogRef = this.dialog.open(DeleteComponent, {
       data : task
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.ngAfterViewInit();
    })
  }

  openDialogUpdate(task : Tasks):void{

    const dialogRef = this.dialog.open(UpdateComponent, {
      data : task
    });
    dialogRef.afterClosed().subscribe(result =>{
       this.ngAfterViewInit();
    })
  }

  ngAfterViewInit() {
    setTimeout(()=>{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    }, 500)
  }
}
