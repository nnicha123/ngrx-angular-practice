import { createAction,props } from "@ngrx/store";
import { History } from "../../definitions/module.definitions";

enum LoadHistoryAction {
  LOAD_HISTORY = '[History] Load Histories',
  LOAD_HISTORY_SUCCESS = '[History] Load Histories Success',
  LOAD_HISTORY_ERROR = '[History] Load HistoriesError',
  LOAD_HISTORY_BY_ID = '[History] Load History By Id'
};

export const loadHistory = createAction(LoadHistoryAction.LOAD_HISTORY);

export const loadHistorySuccess = createAction(
  LoadHistoryAction.LOAD_HISTORY_SUCCESS,
  props<{histories:History[]}>()
);

export const loadHistoryError = createAction(
  LoadHistoryAction.LOAD_HISTORY_ERROR,
  props<{error:any}>()
)

export const loadHistoryById = createAction(
  LoadHistoryAction.LOAD_HISTORY_BY_ID,
  props<{id:string}>()
)