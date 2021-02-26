import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import {faUser, faChartLine, faTasks, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // faChartLine = faChartLine;
  // faUser = faUser;
  // faTasks = faTasks;
  // faPlus = faPlus;

  constructor() { }

  closeTab : boolean;
  hide : boolean;
  @Output() titleHeader = new EventEmitter();
 

  ngOnInit(): void {
    this.changeTitle('Minhas tarefas')
  }


  changeTitle(title){
    this.titleHeader.emit(title);
  }

}
