import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { EmployeeService } from "src/app/employee.service";
import * as fromActions from './delete-employee.action';
import * as fromLoadEmployeesActions from '../load-employees/load-employees.action';

@Injectable()
export class DeleteEmployeeEffect {
  constructor(
    private actions$:Actions,
    private employeeService:EmployeeService,
    private router:Router
  ){}

  deleteEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.deleteEmployee),
      mergeMap((payload) => {
        const id = payload.id;
        return this.employeeService.deleteEmployee(id)
        .pipe(
          map((employee:any) => fromActions.deleteEmployeeSuccess()),
          catchError((error:any) => {
            return of(fromActions.deleteEmployeeError(error))
          })
        )
      })
    )
  )

  deleteEmployeeSuccessOrError$ = createEffect(() => 
  this.actions$.pipe(
    ofType(fromActions.deleteEmployeeSuccess,fromActions.deleteEmployeeError),
    tap(() => {
      window.location.reload();
    }),
  ),
  {dispatch:false}
)
}