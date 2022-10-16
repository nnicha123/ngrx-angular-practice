import { Action, createReducer } from "@ngrx/store";
import { createEmployeeReducer } from "./create-employee/create-employee.reducer";
import { moduleEntityAdapter, ModuleEntityState } from "./definitions/store.definitions";
import { deleteEmployeeReducer } from "./delete-employee/delete.employee.reducer";
import { loadEmployeesReducer } from "./load-employees/load-employees.reducer";
import { updateEmployeeReducer } from "./update-employee/update.employee.reducer";

export const initialState:ModuleEntityState = moduleEntityAdapter.getInitialState({
  selectedId:null
});

const {selectIds, selectEntities,selectAll} = moduleEntityAdapter.getSelectors();

export const idsSelector = selectIds;
export const entitiesSelector = selectEntities;
export const selectAllEntities = selectAll;

const _reducer = createReducer(
  initialState,
  ...createEmployeeReducer(),
  ...loadEmployeesReducer(),
  ...deleteEmployeeReducer(),
  ...updateEmployeeReducer()
);

export function moduleReducer(state:ModuleEntityState|undefined, action:Action){
  return _reducer(state,action)
};

