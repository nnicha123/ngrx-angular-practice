import cloneDeep from 'lodash.clonedeep';
import { ModuleData } from "src/app/employee/definitions/module.definitions";
import { Employee } from '../../employee';
import { ModuleEntity, ModuleEntityState } from "../definitions/store.definitions";


export function getData(state:ModuleEntityState):ModuleData | undefined {
  const data:ModuleData | undefined = cloneDeep(state.entities[state.selectedId || '0']?.data);
  return data;
}

export function getEmployeeEntities(state:ModuleEntityState, employees:Employee[]|undefined):ModuleEntity[]|undefined{
  return employees?.map(employee => {
    return {
      data:employee as ModuleData,
      status:'ready'
    } as ModuleEntity
  })
}