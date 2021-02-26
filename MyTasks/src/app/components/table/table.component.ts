import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  displayedColumns : string[]

  constructor(private tableService : TableService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = ['name', 'description', 'data', 'isFinished', 'importance', 'edit', 'delete'];
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
    // dialogRef.afterClosed().subscribe(result =>{})
  }
}
