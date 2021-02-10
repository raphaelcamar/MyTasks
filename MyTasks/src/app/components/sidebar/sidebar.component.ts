import { Component, Input, OnInit } from '@angular/core';
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
  @Input() isHiding : boolean

  ngOnInit(): void {
    this.closeTab = false;
    this.hide = false;
    console.log(this.isHiding);
  }

  openCloseTab(){
    this.closeTab = !this.closeTab;
    setTimeout(()=>{
      this.hide = !this.hide
    }, 200)
  }

}
