import cloneDeep from 'lodash.clonedeep';
import { History,ModuleData } from '../definitions/module.definitions';
import { ModuleEntity, ModuleEntityState } from "../store/definitions/store.definitions";


export function getData(state:ModuleEntityState):ModuleData | undefined {
  console.log(state);
  const data:ModuleData | undefined = cloneDeep(state.entities[state.selectedId || '0']?.data);
  return data;
}