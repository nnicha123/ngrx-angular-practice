import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/components/update-employee/update-employee.component';
import { HistoryListComponent } from './history/components/history-list/history-list.component';

const routes: Routes = [
  {path:'employees', component:EmployeeListComponent},
  {path:'create-employee',component:UpdateEmployeeComponent},
  {path:'', redirectTo:'employees',pathMatch:'full' },
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent},
  {path:'history-list',component:HistoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
