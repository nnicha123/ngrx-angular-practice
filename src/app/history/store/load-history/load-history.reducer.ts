import {on,ReducerTypes} from '@ngrx/store';
import { ModuleData } from '../../definitions/module.definitions';
import { getData } from '../../utils';
import { moduleEntityAdapter, ModuleEntityState } from '../definitions/store.definitions';
import * as fromActions from './load-history.action';

export function loadHistoryReducer():ReducerTypes<ModuleEntityState,any>[]{
  return [
    on(fromActions.loadHistory, (state) => {
      return {
        ...moduleEntityAdapter.addOne(
          {
            data:{
              id:'0',
              histories:[]
            },
            status:'loading'
          },
        state
        )
      }
    }),
    on(fromActions.loadHistorySuccess, (state,{histories}) => {
      console.log(histories);
      const data:ModuleData | undefined = getData(state);
      if(data){
        data.histories = [...histories];
      }
      return {
        ...moduleEntityAdapter.updateOne(
          {
            id: state.selectedId || '0',
            changes:{
              data:data
            }
          },
          state
        )
      }
    }),
    on(fromActions.loadHistoryError, (state,error) => {
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