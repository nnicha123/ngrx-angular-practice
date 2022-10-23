import { createAction,props } from "@ngrx/store";
import { History } from "../../definitions/module.definitions";

enum CreateHistoryAction {
  CREATE_HISTORY = '[Employee] Create Employee',
  CREATE_HISTORY_SUCCESS = '[Employee] Create Employee Success',
  CREATE_HISTORY_ERROR = '[Employee] Create Employee Error'
};

export const createHistory = createAction(
  CreateHistoryAction.CREATE_HISTORY,
  props<{history:History}>()
);

export const createHistorySuccess = createAction(
  CreateHistoryAction.CREATE_HISTORY_SUCCESS,
  props<{history:History}>()
);

export const createHistoryError = createAction(
  CreateHistoryAction.CREATE_HISTORY_ERROR,
  props<{error:any}>()
)