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
import { TableComponent } from '../components/table/table.component';
import {MatTableModule} from '@angular/material/table/';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { DashboardsComponent } from '../components/user/dashboards/dashboards.component';
import { IconPipe } from '../pipes/icon.pipe';
// import { ButtonComponent } from '../components/button/button.component';


@NgModule({
  declarations: [
    DefaultComponent, 
    HeaderComponent, 
    InfosComponent, 
    CardComponent,
    SidebarComponent,
    TableComponent,
    DashboardsComponent,
    TruncatePipe,
    IconPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    ChartsModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class DefaultModule { }
