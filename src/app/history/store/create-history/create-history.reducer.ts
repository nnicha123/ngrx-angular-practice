import {on,ReducerTypes} from '@ngrx/store';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from '../create-history/create-history.action';
import { getData } from '../../utils';

export function createHistoryReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.createHistory, (state) => {
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
    on(fromActions.createHistorySuccess, (state,{history}) => {
      const data = getData(state);
      console.log(data);
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id:state.selectedId || '0',
            changes:{
              data:data,
              status:'ready'
            }
          },
          state
        )
      }
    }),
    on(fromActions.createHistorySuccess, (state,error) => {
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