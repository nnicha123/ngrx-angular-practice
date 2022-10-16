import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {switchMap,map, tap, withLatestFrom, concatMap, of } from "rxjs";
import { EmployeeService } from "src/app/employee.service";
import { Employee } from "../../employee";
import * as fromActions from './update.employee.action';
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { ModuleEntityState } from "../definitions/store.definitions";
import * as fromSelectors from '../module.selector';
@Injectable()
export class UpdateEmployeeEffect {
  constructor(
    private actions$:Actions,
    private employeeService:EmployeeService,
    private router:Router,
    private store:Store<ModuleEntityState>,
  ){}

  updateEmployee$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.updateEmployee),

      switchMap((payload) => {
        const id = payload.id;
        const employee = payload.employee;
        return this.employeeService.updateEmployee(id,employee)
        .pipe(
          map((employee:Employee) => fromActions.updateEmployeeSuccess({employee})
        ))
      })
    )
  )

  updateEmployeeSuccessOrError$ = createEffect(() => 
      this.actions$.pipe(
        ofType(fromActions.updateEmployeeSuccess,fromActions.updateEmployeeSuccess),
        tap(() => {
          this.router.navigate(['/employees']);
        }),
      ),
      {dispatch:false}
  )
}