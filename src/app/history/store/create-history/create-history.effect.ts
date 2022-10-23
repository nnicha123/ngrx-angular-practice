import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {switchMap,map, tap } from "rxjs";

import { History } from "../../definitions/module.definitions";
import * as fromActions from './create-history.action';
import { Router } from "@angular/router";
import { HistoryService } from "../../services/history.service";
@Injectable()
export class CreateHistoryEffect {
  constructor(
    private actions$:Actions,
    private historyService:HistoryService,
    private router:Router
  ){}

  createEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.createHistory),
      switchMap((payload) => {
        const history = payload.history;
        return this.historyService.createHistory(history)
        .pipe(
          map((history:History) => fromActions.createHistorySuccess({history})
        ))
      })
    )
  )

  createEmployeeSuccessOrError$ = createEffect(() => 
      this.actions$.pipe(
        ofType(fromActions.createHistorySuccess,fromActions.createHistoryError),
        tap(() => {
          this.router.navigate(['/history-list']);
        }),
      ),
      {dispatch:false}
  )
}