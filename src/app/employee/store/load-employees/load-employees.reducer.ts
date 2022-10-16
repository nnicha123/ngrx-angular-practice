import {on,ReducerTypes} from '@ngrx/store';
import { ModuleEntity, moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../load-employees/load-employees.action';
import { ModuleData } from 'src/app/employee/definitions/module.definitions';
import { getData,getEmployeeEntities } from '../utils';

export function loadEmployeesReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.loadEmployees, (state) => {
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:state.selectedId || '0',
            changes:{
              status:'loading'
            }
          },
          state
        )
      }
    }),
    on(fromActions.loadEmployeesSuccess, (state,action) => {
      console.log(action);
      const employeeEntities:ModuleEntity[]|undefined = getEmployeeEntities(state,action.employees) || []
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