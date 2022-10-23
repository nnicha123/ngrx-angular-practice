
import { CreateHistoryEffect } from "./create-history/create-history.effect";
import { featureKey } from "./definitions/store.definitions";
import { LoadHistoryEffect } from "./load-history/load-history.effect";
import { moduleReducer } from "./module.reducer";
import { selectHistories, selectStatus } from "./module.selector";

const actions = {};

const selectors = {
  selectStatus:selectStatus,
  selectHistories:selectHistories
}

const effects:any[] = [
  LoadHistoryEffect,
  CreateHistoryEffect
];

export {featureKey, actions, selectors, effects, moduleReducer}