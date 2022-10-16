import { createAction,props } from "@ngrx/store";
import { Employee } from "../../employee";

enum CreateEmployeeAction {
  CREATE_EMPLOYEE = '[Employee] Create Employee',
  CREATE_EMPLOYEE_SUCCESS = '[Employee] Create Employee Success',
  CREATE_EMPLOYEE_ERROR = '[Employee] Create Employee Error'
};

export const createEmployee = createAction(
  CreateEmployeeAction.CREATE_EMPLOYEE,
  props<{employee:Employee}>()
);

export const createEmployeeSuccess = createAction(
  CreateEmployeeAction.CREATE_EMPLOYEE_SUCCESS,
  props<{employee:Employee}>()
);

export const createEmployeeError = createAction(
  CreateEmployeeAction.CREATE_EMPLOYEE_ERROR,
  props<{error:any}>()
)