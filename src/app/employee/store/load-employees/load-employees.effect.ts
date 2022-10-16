import { Injectable } from "@angular/core";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Employee } from "src/app/employee/employee";
import { EmployeeService } from "src/app/employee.service";
import * as fromActions from './load-employees.action';
import { Router } from "@angular/router";

@Injectable()
export class LoadEmployeesEffect {
  constructor(
    private actions$:Actions,
    private employeeService: EmployeeService,
  ){}

  loadEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.loadEmployees),
      mergeMap(() => {
        return this.employeeService.getEmployeesList().pipe(
          map((employees:Employee[]) => fromActions.loadEmployeesSuccess({employees})),
          catchError((error:any) => {
            return of(fromActions.loadEmployeesError(error))
          })
        )
      })
    )
  )
}