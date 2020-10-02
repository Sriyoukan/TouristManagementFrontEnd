import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-travel-agent',
  templateUrl: './register-travel-agent.component.html',
  styleUrls: ['./register-travel-agent.component.css']
})
export class RegisterTravelAgentComponent implements OnInit {

  registerTravelAgentForm:FormGroup;
  alert:any
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerTravelAgentForm = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      mobileNo:[null,Validators.required],
      password:[null,Validators.required]
    })
  }
  get f(){ return this.registerTravelAgentForm.controls}

  onSubmit(){
    if (this.registerTravelAgentForm.invalid) {
      return;
    }

    this.authService.registerTravelAgent(this.f.name.value,this.f.email.value,this.f.mobileNo.value,this.f.password.value)
    .subscribe(data=>{
       this.alert=data;
    })


}

}
