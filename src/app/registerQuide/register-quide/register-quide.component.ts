import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from './../../services/alert.service';
@Component({
  selector: 'app-register-quide',
  templateUrl: './register-quide.component.html',
  styleUrls: ['./register-quide.component.css']
})
export class RegisterQuideComponent implements OnInit {

  registerQuideForm:FormGroup;
  alert:any
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router,private alertService:AlertService) { }

  ngOnInit(): void {
    this.registerQuideForm = this.formBuilder.group({
      name:[null,Validators.required],
      email: new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      mobileNo:new FormControl(null,[Validators.required,Validators.pattern("[0-9].{10,}")]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    })
  }
  get f(){ return this.registerQuideForm.controls}

  onSubmit(){
    if (this.registerQuideForm.invalid) {
      return;
    }

    this.authService.registerQuide(this.f.name.value,this.f.email.value,this.f.mobileNo.value,this.f.password.value)
    .subscribe(data=>{
       this.alert=data;
       this.router.navigate(['/TRAVELAGENT'])
       this.alertService.success("SuccessFully registered Guide.")
    })


}

}
