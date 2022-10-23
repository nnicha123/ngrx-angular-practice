import { Action, createReducer } from "@ngrx/store";
import { createHistoryReducer } from "./create-history/create-history.reducer";
import { moduleEntityAdapter, ModuleEntityState } from "./definitions/store.definitions";
import { loadHistoryReducer } from "./load-history/load-history.reducer";

export const initialState:ModuleEntityState = moduleEntityAdapter.getInitialState({
  selectedId:null
});

const {selectIds, selectEntities,selectAll} = moduleEntityAdapter.getSelectors();

export const idsSelector = selectIds;
export const entitiesSelector = selectEntities;
export const selectAllEntities = selectAll;

const _reducer = createReducer(
  initialState,
  ...loadHistoryReducer(),
  ...createHistoryReducer()
);

export function moduleReducer(state:ModuleEntityState|undefined, action:Action){
  return _reducer(state,action)
};

