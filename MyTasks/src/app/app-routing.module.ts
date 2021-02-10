import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from './components/adm/adm.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DeleteComponent } from './components/tasks/delete/delete.component';
import { MonthTasksComponent } from './components/tasks/month-tasks/month-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UpdateComponent } from './components/tasks/update/update.component';
import { InfosComponent } from './components/user/infos/infos.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SubscribeComponent } from './components/user/subscribe/subscribe.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { Tasks } from './models/tasks.model';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'infos', component : InfosComponent},
  {path : 'sidebar', component : SidebarComponent},
  {path : 'profile', component : ProfileComponent},
  {path : 'tasks', component : TasksComponent},
  {path : 'update/:id', component :  UpdateComponent},
  {path : 'delete/:id', component : DeleteComponent},
  {path : 'login', component : LoginComponent},
  {path : 'subscribe', component : SubscribeComponent},
  {path : 'users/data', component : AdmComponent ,},
  {path : 'users/tasks/month/:month', component : MonthTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }