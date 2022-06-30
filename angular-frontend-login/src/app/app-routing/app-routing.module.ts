import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from 'src/app/hello-world/hello-world.component';
import { LoginComponent } from 'src/app/login/login.component';
import { EmployeeListComponent } from 'src/app/employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from 'src/app/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from 'src/app/employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from 'src/app/employee/employee-details/employee-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
