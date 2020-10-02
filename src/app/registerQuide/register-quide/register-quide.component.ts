import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register-quide',
  templateUrl: './register-quide.component.html',
  styleUrls: ['./register-quide.component.css']
})
export class RegisterQuideComponent implements OnInit {

  registerQuideForm:FormGroup;
  alert:any
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerQuideForm = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      mobileNo:[null,Validators.required],
      password:[null,Validators.required]
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
    })


}

}
