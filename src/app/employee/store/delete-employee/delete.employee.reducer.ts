import {on,ReducerTypes} from '@ngrx/store';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../delete-employee/delete-employee.action';
import { ModuleData } from 'src/app/employee/definitions/module.definitions';
import { getData } from '../utils';

export function deleteEmployeeReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.deleteEmployee, (state) => {
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
    on(fromActions.deleteEmployeeSuccess, (state,{id}) => {
      return {
        ...moduleEntityAdapter.removeOne(id,state),
          
      }
    }),
    on(fromActions.deleteEmployeeError, (state,error) => {
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