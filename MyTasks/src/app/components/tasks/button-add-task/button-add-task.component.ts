import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'app-button-add-task',
  templateUrl: './button-add-task.component.html',
  styleUrls: ['./button-add-task.component.css']
})
export class ButtonAddTaskComponent implements OnInit {

  constructor(private dialog : MatDialog) {}

  ngOnInit(): void {}

  addTask(){
    this.dialog.open(AddTaskComponent)
  
  }

}
