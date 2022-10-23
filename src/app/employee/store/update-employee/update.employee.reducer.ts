import {on,ReducerTypes} from '@ngrx/store';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../update-employee/update.employee.action';

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