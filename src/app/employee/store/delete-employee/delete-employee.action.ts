import { createAction,props } from "@ngrx/store";
import { Employee } from "../../employee";

enum DeleteEmployeeAction {
  DELETE_EMPLOYEE = '[Employee] Delete Employee',
  DELETE_EMPLOYEE_SUCCESS = '[Employee] Delete Employee Success',
  DELETE_EMPLOYEE_ERROR = '[Employee] Delete Employee Error'
};

export const deleteEmployee = createAction(
  DeleteEmployeeAction.DELETE_EMPLOYEE,
  props<{id:string}>()
);

export const deleteEmployeeSuccess = createAction(
  DeleteEmployeeAction.DELETE_EMPLOYEE_SUCCESS,
);

export const deleteEmployeeError = createAction(
  DeleteEmployeeAction.DELETE_EMPLOYEE_ERROR,
  props<{error:any}>()
)