export interface ModuleData {
  id:string;
  firstName:string;
  lastName:string;
  emailId:string;
}

export type ModuleStatus = 'loading' | 'ready' | 'error';