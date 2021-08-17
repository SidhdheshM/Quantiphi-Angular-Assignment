import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  myform: FormGroup;

  
  constructor(
    private fb: FormBuilder
  )
  {
    this.myform = this.fb.group({
      employeeName: ['',[Validators.required]],
      employeeMail: ['',[Validators.required],Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")],
      employeeContact: [null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)],Validators.pattern('^[0-9]*$')],
      employeeAddress:['',[Validators.required, Validators.required]],
      employeeDOB:['1-1-2000',[Validators.required]],
      agree: [false, Validators.requiredTrue]
    });

    this.myform.valueChanges.subscribe(res=>{
      console.log(res);
    });
  }
  ngOnInit(): void {
  }
}
