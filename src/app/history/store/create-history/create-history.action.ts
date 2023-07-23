import { createAction,props } from "@ngrx/store";
import { History } from "../../definitions/module.definitions";

enum CreateHistoryAction {
  CREATE_HISTORY = '[History] Create History',
  CREATE_HISTORY_SUCCESS = '[History] Create History Success',
  CREATE_HISTORY_ERROR = '[History] Create History Error'
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