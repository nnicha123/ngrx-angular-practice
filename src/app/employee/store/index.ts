import { createEmployee, createEmployeeError, createEmployeeSuccess } from "./create-employee/create-employee.action";
import {loadEmployees,loadEmployeesSuccess,loadEmployeesError} from './load-employees/load-employees.action';
import { CreateEmployeeEffect } from "./create-employee/create-employee.effect";
import { featureKey } from "./definitions/store.definitions";
import { moduleReducer } from "./module.reducer";
import { selectStatus } from "./module.selector";
import { LoadEmployeesEffect } from "./load-employees/load-employees.effect";
import { DeleteEmployeeEffect } from "./delete-employee/delete-employee.effect";
import { UpdateEmployeeEffect } from "./update-employee/update.employee.effect";

const actions = {
  createEmployee:createEmployee,
  createEmployeeSuccess:createEmployeeSuccess,
  createEmployeeError:createEmployeeError,
  loadEmployees:loadEmployees,
  loadEmployeesSuccess:loadEmployeesSuccess,
  loadEmployeesError:loadEmployeesError
};

const selectors = {
  selectStatus:selectStatus
}

const effects:any[] = [
  CreateEmployeeEffect,
  LoadEmployeesEffect,
  DeleteEmployeeEffect,
  UpdateEmployeeEffect
];

export {featureKey, actions, selectors, effects, moduleReducer}