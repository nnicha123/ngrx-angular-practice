import { createFeatureSelector, createSelector,props } from "@ngrx/store";
import { featureKey, ModuleEntityState } from "./definitions/store.definitions";
import * as fromReducer from './module.reducer';

const selectFeature = createFeatureSelector<ModuleEntityState>(featureKey);

export const selectEntities = createSelector(selectFeature, fromReducer.entitiesSelector);

const selectId = createSelector(selectFeature, feature => feature ? feature.selectedId : '0');

const selectEntity = createSelector(selectEntities, selectId,(entities,id) => id != null ? entities[id] : undefined);

export const selectData = createSelector(selectEntity, entity => entity ? entity.data : undefined);

export const selectStatus = createSelector(selectEntity, entity => entity ? entity.status : undefined);

export const selectAll = createSelector(selectFeature,  fromReducer.selectAllEntities);

export const selectHistories = createSelector(selectData, data => data ? data.histories : []);


