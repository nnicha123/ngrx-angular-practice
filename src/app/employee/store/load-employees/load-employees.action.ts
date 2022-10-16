import { createAction,props } from "@ngrx/store";
import { Employee } from "../../employee";

enum LoadEmployeesAction {
  LOAD_EMPLOYEES = '[Employee] Load Employees',
  LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success',
  LOAD_EMPLOYEES_ERROR = '[Employee] Load Employees Error',
  LOAD_EMPLOYEE_BY_ID = '[Employee] Load Employee By Id'
};

export const loadEmployees = createAction(LoadEmployeesAction.LOAD_EMPLOYEES);

export const loadEmployeesSuccess = createAction(
  LoadEmployeesAction.LOAD_EMPLOYEES_SUCCESS,
  props<{employees:Employee[]}>()
);

export const loadEmployeesError = createAction(
  LoadEmployeesAction.LOAD_EMPLOYEES_ERROR,
  props<{error:any}>()
)

export const loadEmployeeById = createAction(
  LoadEmployeesAction.LOAD_EMPLOYEE_BY_ID,
  props<{id:string}>()
)