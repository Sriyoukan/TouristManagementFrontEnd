import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import { FormGroup, FormBuilder,FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from './../../services/alert.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;
  alert:any
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router, private alertService:AlertService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name:[null,Validators.required],
      email: new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      mobileNo:new FormControl(null,[Validators.required,Validators.pattern("[0-9].{10,}")]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    })
  }
  get f(){ return this.signUpForm.controls}

  onSubmit(){
    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.signUp(this.f.name.value,this.f.email.value,this.f.mobileNo.value,this.f.password.value)
    .subscribe((data)=>{
       this.alert=data;
       this.router.navigate(['/login'])
       this.alertService.success("SuccessFully registered user, now go to login")
    },(err)=>{
      this.alertService.warn('User with this email already exist !');
    })


}


}
