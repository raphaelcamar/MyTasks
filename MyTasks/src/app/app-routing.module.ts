import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DeleteComponent } from './components/tasks/delete/delete.component';
import { MonthTasksComponent } from './components/tasks/month-tasks/month-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UpdateComponent } from './components/tasks/update/update.component';
import { InfosComponent } from './components/user/infos/infos.component';
import { LoginComponent } from './components/user/login/login.component';
import { SubscribeComponent } from './components/user/subscribe/subscribe.component';
import { DefaultComponent } from './default/default.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { Tasks } from './models/tasks.model';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'subscribe', component : SubscribeComponent},
  {path : 'page', component : DefaultComponent, children : [
    {path : 'tasks', component : InfosComponent },
    // {path : 'dashboards', component : }
    {path : 'profile', component : InfosComponent}
  ]
}];

  // {path : 'dashboard', component : DashboardComponent,}
  // {path : 'infos', component : InfosComponent},
  // {path : 'sidebar', component : SidebarComponent},
  // {path : 'profile', component : ProfileComponent},
  // {path : 'tasks', component : TasksComponent},
  // {path : 'update/:id', component :  UpdateComponent},
  // {path : 'delete/:id', component : DeleteComponent},
  // {path : 'login', component : LoginComponent},
  // {path : 'users/data', component : AdmComponent ,},
  // {path : 'users/tasks/month/:month', component : MonthTasksComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }