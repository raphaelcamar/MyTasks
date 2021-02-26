import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { InfosComponent } from '../components/user/infos/infos.component';
import { CardComponent } from '../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
// import { HeaderComponent } from '../components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    DefaultComponent, 
    HeaderComponent, 
    InfosComponent, 
    CardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
  ]
})
export class DefaultModule { }
