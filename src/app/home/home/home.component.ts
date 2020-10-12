import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from './../../services/alert.service';
import {DashboardService} from './../../services/dashboard.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetailForm:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private alertService:AlertService,private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.userDetailForm=this.formBuilder.group({
        name:[null,Validators.required],
        email:[null,Validators.required],
        mobileNo:[null,Validators.required],
        country:[null,Validators.required]
    })
  }
  get f(){ return this.userDetailForm.controls}
  onSubmit(){
    if (this.userDetailForm.invalid) {
      
      this.alertService.error("Please provide ")
      return;
    }

    this.dashboardService.sendDetailsToAdmin(this.f.name.value,this.f.email.value,this.f.mobileNo.value,this.f.country.value)
    .subscribe(data=>{ 
      this.userDetailForm.setValue({
        name:null,
        email:null,
        mobileNo:null,
        country:null
      })
      this.alertService.success('SuccessFully sent details !');
    },(err)=>{
      this.alertService.error("Cant't send")
    })

    
}

}
