import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/user/user.component';
import { ServiceProvidersComponent } from './components/service-provider/service-provider.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  }, 
  {
    path: "login",
    component: LoginComponent
  }, 
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service-providers', component: ServiceProvidersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
