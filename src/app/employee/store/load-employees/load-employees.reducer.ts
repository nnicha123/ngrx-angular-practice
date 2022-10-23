import {on,ReducerTypes} from '@ngrx/store';
import { ModuleEntity, moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../load-employees/load-employees.action';
import { getEmployeeEntities } from '../utils';

export function loadEmployeesReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.loadEmployees, (state) => {
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:state.selectedId || '0',
            changes:{
              status:'loading',
            }
          },
          state
        )
      }
    }),
    on(fromActions.loadEmployeesSuccess, (state,action) => {
      const employeeEntities:ModuleEntity[]|undefined = getEmployeeEntities(state,action.employees) || [];
      console.log(employeeEntities);
      return {
        ...moduleEntityAdapter.addMany(
          [...employeeEntities],
          state
        )
      }
    }),
    on(fromActions.loadEmployeesError, (state,error) => {
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:state.selectedId || '0',
            changes:{
              status:'error'
            }
          },
          state
        )
      }
    }),
  ]
}