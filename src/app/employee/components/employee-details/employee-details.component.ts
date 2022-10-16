import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employee';
import { ModuleFacade } from '../../store/module.facade';
import { take } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:string = '';
  employee:Employee = {id:'', firstName:'',lastName:'',emailId:''};
  
  constructor(private route:ActivatedRoute,private moduleFacade:ModuleFacade) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.moduleFacade.getEmployeeById(this.id).pipe(
      take(1)
    ).subscribe(employee => {if(employee) this.employee = employee})
  }

}
