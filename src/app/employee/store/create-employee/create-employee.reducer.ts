import {on,ReducerTypes} from '@ngrx/store';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../create-employee/create-employee.action';
import { ModuleData } from 'src/app/employee/definitions/module.definitions';
import { getData } from '../utils';

export function createEmployeeReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.createEmployee, (state) => {
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
    on(fromActions.createEmployeeSuccess, (state,action) => {
      console.log(action.employee);
      const data:ModuleData|undefined = getData(state);
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:state.selectedId || '0',
            changes:{
              data:action.employee,
              status:'ready'
            }
          },
          state
        )
      }
    }),
    on(fromActions.createEmployeeError, (state,error) => {
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