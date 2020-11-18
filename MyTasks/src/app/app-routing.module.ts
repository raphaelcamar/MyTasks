import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { DeleteComponent } from './components/tasks/delete/delete.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UpdateComponent } from './components/tasks/update/update.component';
import { InfosComponent } from './components/user/infos/infos.component';
import { LoginComponent } from './components/user/login/login.component';
import { SubscribeComponent } from './components/user/subscribe/subscribe.component';

const routes: Routes = [
  {path : '', component : LandingComponent},
  {path : 'tasks', component : TasksComponent},
  {path : 'update/:id', component :  UpdateComponent},
  {path : 'delete/:id', component : DeleteComponent},
  {path : 'user/infos', component : InfosComponent},
  {path : 'subscribe', component : SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }