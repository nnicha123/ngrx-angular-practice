import {EntityState,EntityAdapter,createEntityAdapter} from '@ngrx/entity';
import { ModuleData, ModuleStatus } from '../../definitions/module.definitions';

export const featureKey = 'history';

export interface ModuleEntity {
  id:string;
  data?:ModuleData;
  status:ModuleStatus;
}

export interface ModuleEntityState extends EntityState<ModuleEntity> {
  selectedId:string | null;
}

const selectUserId = (entity:ModuleEntity):string => {
  return entity.id as string
}

export const moduleEntityAdapter:EntityAdapter<ModuleEntity> = createEntityAdapter<ModuleEntity>({
  selectId:selectUserId
})