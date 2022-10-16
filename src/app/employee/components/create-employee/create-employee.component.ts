import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../../employee.service';
import { ModuleFacade } from '../../store/module.facade';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee = { id:'',firstName:'',lastName:'',emailId:''};
  constructor(private moduleFacade:ModuleFacade) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    if(this.employee){
      this.moduleFacade.createEmployee(this.employee);
    }
  }

  onSubmit(){
    this.saveEmployee();
  }

}
