import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './components/user/dashboards/dashboards.component';
import { InfosComponent } from './components/user/infos/infos.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SubscribeComponent } from './components/user/subscribe/subscribe.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'subscribe', component : SubscribeComponent},
  {path : 'page', component : DefaultComponent, children : [
    {path : 'tasks', component : InfosComponent },
    {path : 'profile', component : ProfileComponent},
    {path : 'dashboards', component : DashboardsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }