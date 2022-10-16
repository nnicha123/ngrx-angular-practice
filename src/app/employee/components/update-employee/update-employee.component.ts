import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../../employee.service';
import { ModuleFacade } from '../../store/module.facade';
import { take } from 'rxjs';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:string = '';
  employee:Employee = { id:'',firstName:'',lastName:'',emailId:''};

  constructor(private route:ActivatedRoute, private moduleFacade:ModuleFacade) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.patchWithStoreValue();
  }

  onSubmit(){
    this.moduleFacade.updateEmployee(this.id, this.employee);
  }

  private patchWithStoreValue():void {
    this.moduleFacade.getEmployeeById(this.route.snapshot.params['id'])
    .pipe(
      take(1)
    ).subscribe(employee => {
      if(employee){
        this.employee = employee
      }
    })
  }
}
