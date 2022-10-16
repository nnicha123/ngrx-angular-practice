import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ModuleEntityState } from "./definitions/store.definitions";
import * as fromCreateEmployeeActions from './create-employee/create-employee.action';
import * as fromLoadEmployeesActions from './load-employees/load-employees.action';
import * as fromDeleteActions from './delete-employee/delete-employee.action';
import * as fromUpdateActions from './update-employee/update.employee.action';
import { Observable } from "rxjs";
import * as fromSelectors from './module.selector';
import { Employee } from "../employee";

@Injectable()
export class ModuleFacade {
  constructor(private store:Store<ModuleEntityState>){}

  createEmployee(employee:Employee):void{
    this.store.dispatch(fromCreateEmployeeActions.createEmployee({employee}));
  }

  loadEmployees():void{
    this.store.dispatch(fromLoadEmployeesActions.loadEmployees());
  }

  deleteEmployee(id:string):void{
    this.store.dispatch(fromDeleteActions.deleteEmployee({id}));
  }

  updateEmployee(id:string, employee:Employee):void{
    this.store.dispatch(fromUpdateActions.updateEmployee({id,employee}));
  }

  getEmployeeById(id:string):Observable<Employee|undefined>{
    return this.store.pipe(
      select(fromSelectors.selectEmployeeById,{
        id:id
      })
    )
  }

  get allEmployees$():Observable<any>{
    return this.store.pipe(select(fromSelectors.selectAllEmployees))
  }

}