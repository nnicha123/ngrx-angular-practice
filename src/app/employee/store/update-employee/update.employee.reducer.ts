import {on,ReducerTypes} from '@ngrx/store';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../update-employee/update.employee.action';

export function updateEmployeeReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.updateEmployee, (state,{id}) => {
      console.log(id)
      const stringId = '' + id;
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:stringId|| '0',
            changes:{
              status:'loading'
            }
          },
          state
        )
      }
    }),
    on(fromActions.updateEmployeeSuccess, (state,{id,employee}) => {
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:id || '0',
            changes:{
              data:employee,
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