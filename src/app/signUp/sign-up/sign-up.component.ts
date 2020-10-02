import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;
  alert:any
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      mobileNo:[null,Validators.required],
      password:[null,Validators.required]
    })
  }
  get f(){ return this.signUpForm.controls}

  onSubmit(){
    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.signUp(this.f.name.value,this.f.email.value,this.f.mobileNo.value,this.f.password.value)
    .subscribe(data=>{
       this.alert=data;
    })


}


}
