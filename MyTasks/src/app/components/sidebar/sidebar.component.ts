import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  closeTab : boolean

  ngOnInit(): void {
    this.closeTab = false;
  }

  // close(){
  //   this.closeTab = !this.closeTab;
  // }

}
