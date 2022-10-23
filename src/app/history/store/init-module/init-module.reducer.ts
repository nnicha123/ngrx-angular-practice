import { on, ReducerTypes } from "@ngrx/store";
import { ModuleEntity, moduleEntityAdapter, ModuleEntityState } from "../definitions/store.definitions";
import * as fromActions from './init-module.action';

export function initModuleReducer():ReducerTypes<ModuleEntityState,any>[] {
  return [
    on(fromActions.initModule, (state, {id}) => {
      return {
        ...moduleEntityAdapter.upsertOne(
          {
            ...initialEntity(id),
          },
          state,
        ),
        selectedId:id
      }
    })
  ]
  
}

function initialEntity(id:string):ModuleEntity {
  return {
    id:id,
    status:'ready',
  }
}