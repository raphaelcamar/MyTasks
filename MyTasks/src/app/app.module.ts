import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
// import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './components/tasks/update/update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { MatTableModule } from '@angular/material/table';
import { DeleteComponent } from './components/tasks/delete/delete.component';
import { LoginComponent } from './components/user/login/login.component';
import { SubscribeComponent } from './components/user/subscribe/subscribe.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthGuardService } from './guards/auth-guard.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { CardComponent } from './components/card/card.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MonthTasksComponent } from './components/tasks/month-tasks/month-tasks.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ButtonAddTaskComponent } from './components/tasks/button-add-task/button-add-task.component';
import {MatSortModule} from '@angular/material/sort';
import { ChartsModule } from 'ng2-charts';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModule } from './default/default.module';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DashboardsComponent } from './components/user/dashboards/dashboards.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
// import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UpdateComponent,
    DeleteComponent,
    LoginComponent,
    SubscribeComponent,
    LandingComponent,
    MonthTasksComponent,
    AddTaskComponent,
    ButtonAddTaskComponent,
    ProfileComponent,
    DashboardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,  
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatSortModule,
    ChartsModule,
    NgbModule,
    DefaultModule
  ],
  providers: [
    // { provide : LOCALE_ID, useValue : 'pt-BR'},
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
