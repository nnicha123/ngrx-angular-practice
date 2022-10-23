import { Injectable } from "@angular/core";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { History } from "../../definitions/module.definitions";
import * as fromActions from './load-history.action';
import { HistoryService } from "../../services/history.service";

@Injectable()
export class LoadHistoryEffect {
  constructor(
    private actions$:Actions,
    private historyService: HistoryService,
  ){}

  loadEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.loadHistory),
      mergeMap(() => {
        return this.historyService.getHistoryList().pipe(
          map((histories:History[]) => fromActions.loadHistorySuccess({histories})),
          catchError((error:any) => {
            return of(fromActions.loadHistoryError(error))
          })
        )
      })
    )
  )
}