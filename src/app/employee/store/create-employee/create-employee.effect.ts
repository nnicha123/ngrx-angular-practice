import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {switchMap,map, tap } from "rxjs";
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../employee";
import * as fromActions from './create-employee.action';
import { Router } from "@angular/router";
@Injectable()
export class CreateEmployeeEffect {
  constructor(
    private actions$:Actions,
    private employeeService:EmployeeService,
    private router:Router
  ){}

  createEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.createEmployee),
      switchMap((payload) => {
        const employee = payload.employee;
        return this.employeeService.createEmployee(employee)
        .pipe(
          map((employee:Employee) => fromActions.createEmployeeSuccess({employee})
        ))
      })
    )
  )

  createEmployeeSuccessOrError$ = createEffect(() => 
      this.actions$.pipe(
        ofType(fromActions.createEmployeeSuccess,fromActions.createEmployeeError),
        tap(() => {
          this.router.navigate(['/employees']);
        }),
      ),
      {dispatch:false}
  )
}