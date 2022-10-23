import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Employee } from '../../employee';
import { ModuleFacade } from '../../store/module.facade';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[] = [];
  employees$:Observable<any>;

  constructor(private router:Router, private moduleFacade:ModuleFacade) {
    this.employees$ = this.moduleFacade.allEmployees$;
   }

  ngOnInit(): void {
    this.employees$.pipe(take(1)).subscribe((employees) => {
      if(employees.length === 0){
        this.moduleFacade.loadEmployees();
      }
    })
  }

  updateEmployee(id:string){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:string){
    this.moduleFacade.deleteEmployee(id);
  }

  employeeDetails(id:string){
    this.router.navigate(['employee-details',id]);
  }

}
