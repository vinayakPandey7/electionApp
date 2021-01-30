import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { UserManagementComponent } from './user-management/user-management.component';


const routes: Routes = [
   
  {path:'dashboard', component: DashboardComponent},
  {path:'events', component: EventsComponent},
  {path:'usermanagement', component: UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
