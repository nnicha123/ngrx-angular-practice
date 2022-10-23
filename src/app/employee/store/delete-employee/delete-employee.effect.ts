import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { EmployeeService } from "src/app/employee/services/employee.service";
import * as fromActions from './delete-employee.action';

@Injectable()
export class DeleteEmployeeEffect {
  constructor(
    private actions$:Actions,
    private employeeService:EmployeeService,
  ){}

  deleteEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.deleteEmployee),
      mergeMap((payload) => {
        const id = payload.id;
        return this.employeeService.deleteEmployee(id)
        .pipe(
          map(() => fromActions.deleteEmployeeSuccess({id})),
          catchError((error:any) => {
            return of(fromActions.deleteEmployeeError(error))
          })
        )
      })
    )
  )

}