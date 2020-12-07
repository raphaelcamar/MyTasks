import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from './components/adm/adm.component';
import { LandingComponent } from './components/landing/landing.component';
import { DeleteComponent } from './components/tasks/delete/delete.component';
import { MonthTasksComponent } from './components/tasks/month-tasks/month-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UpdateComponent } from './components/tasks/update/update.component';
import { InfosComponent } from './components/user/infos/infos.component';
import { LoginComponent } from './components/user/login/login.component';
import { SubscribeComponent } from './components/user/subscribe/subscribe.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { Tasks } from './models/tasks.model';

const routes: Routes = [
  {path : '', component : LandingComponent, pathMatch : 'full'},
  {path : 'tasks', component : TasksComponent},
  {path : 'update/:id', component :  UpdateComponent},
  {path : 'delete/:id', component : DeleteComponent},
  {path : 'user/infos', component : InfosComponent},
  {path : 'subscribe', component : SubscribeComponent},
  {path : 'users/data', component : AdmComponent ,canActivate:[AuthGuardService]},
  {path : 'users/tasks/month/:month', component : MonthTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }