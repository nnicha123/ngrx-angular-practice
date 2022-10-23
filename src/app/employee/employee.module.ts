import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ModuleFacade } from './store/module.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromStore from '../employee/store';
import { EffectsModule } from '@ngrx/effects';

const STORE_MODULES = [
  StoreModule.forFeature(fromStore.featureKey, fromStore.moduleReducer),
  EffectsModule.forFeature(fromStore.effects)
];

@NgModule({
  declarations: [    
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...STORE_MODULES

  ],
  exports:[EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent],
  providers: [ModuleFacade],

})
export class EmployeeModule { }
