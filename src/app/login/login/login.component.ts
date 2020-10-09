import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 currentUser:any
 userType:any

  loginForm:FormGroup;
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) {
      this.authService.currentUser.subscribe(x=>this.currentUser=x)
      this.authService.currentUserType.subscribe(x=>this.userType=x)


      if(this.currentUser){
        this.router.navigate([`/${this.userType}`])
      }


   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }
  get f(){ return this.loginForm.controls}

  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.email.value,this.f.password.value)
    .subscribe(data=>{ 
      let role:any
      for(const element of data.roles){
        role = element.role
      }
      this.router.navigate([`/${role}`])
    })

    
}



}
