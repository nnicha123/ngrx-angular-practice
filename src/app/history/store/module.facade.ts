import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { History } from "../definitions/module.definitions";
import { ModuleEntityState } from "./definitions/store.definitions";
import * as fromSelectors from './module.selector';
import * as fromLoadHistoyAction from './load-history/load-history.action';

@Injectable()
export class ModuleFacade {
  constructor(private store:Store<ModuleEntityState>){}

  loadHistories():void {
    this.store.dispatch(fromLoadHistoyAction.loadHistory());
  }
  
  get histories$(): Observable<History[]>{
    return this.store.pipe(select(fromSelectors.selectHistories));
  }
}