import {on,ReducerTypes} from '@ngrx/store';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../update-employee/update.employee.action';
import { ModuleData } from 'src/app/employee/definitions/module.definitions';
import { getData } from '../utils';

export function updateEmployeeReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.updateEmployee, (state) => {
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
    on(fromActions.updateEmployeeSuccess, (state,action) => {
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
    on(fromActions.updateEmployeeError, (state,error) => {
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