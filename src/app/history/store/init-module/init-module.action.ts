import { createAction, props } from "@ngrx/store";

export enum ModuleAction {
  INIT_MODULE = '[History] Init Module'
}

export const initModule = createAction(ModuleAction.INIT_MODULE, props<{id:string}>())