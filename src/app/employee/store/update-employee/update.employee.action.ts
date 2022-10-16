import { createAction,props } from "@ngrx/store";
import { Employee } from "../../employee";

enum UpdateEmployeeAction {
  UPDATE_EMPLOYEE = '[Employee] Update Employee',
  UPDATE_EMPLOYEE_SUCCESS = '[Employee] Update Employee Success',
  UPDATE_EMPLOYEE_ERROR = '[Employee] Update Employee Error'
};

export const updateEmployee = createAction(
  UpdateEmployeeAction.UPDATE_EMPLOYEE,
  props<{id:string, employee:Employee}>()
);

export const updateEmployeeSuccess = createAction(
  UpdateEmployeeAction.UPDATE_EMPLOYEE_SUCCESS,
  props<{employee:Employee}>()
);

export const updateEmployeeError = createAction(
  UpdateEmployeeAction.UPDATE_EMPLOYEE_ERROR,
  props<{error:any}>()
)