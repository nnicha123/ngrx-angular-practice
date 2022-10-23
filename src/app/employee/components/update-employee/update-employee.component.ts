import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleFacade } from '../../store/module.facade';
import { take } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:string = '';
  formGroup!:FormGroup;

  constructor(private route:ActivatedRoute, private moduleFacade:ModuleFacade, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initUpdateForm()
  }

  onSubmit(){
    this.moduleFacade.updateEmployee(this.id, this.formGroup.value);
  }

  private patchWithStoreValue():void {
    this.moduleFacade.getEmployeeById(this.route.snapshot.params['id'])
    .pipe(
      take(1)
    ).subscribe(employee => {
      if(employee){
        this.formGroup.patchValue({
          ...employee
        })
      }
    })
  }

  private initUpdateForm():void {
    this.formGroup = this.fb.group({
      firstName:['',[]],
      lastName:['',[]],
      emailId:['',[]]
    })
    this.patchWithStoreValue();

  } 


}
