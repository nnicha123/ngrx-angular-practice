export interface ModuleData {
  histories:History[];
}

export interface History {
  id:string;
  firstName:string;
  lastName:string;
  emailId:string;
  date:Date;
  action:HistoryAction;
}

export type ModuleStatus = 'loading' | 'ready' | 'error';

export type HistoryAction = 'CREATE' | 'UPDATE' | 'DELETE';
