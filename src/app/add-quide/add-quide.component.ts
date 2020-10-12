import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../services/dashboard.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import {AlertService} from './../services/alert.service';
@Component({
  selector: 'app-add-quide',
  templateUrl: './add-quide.component.html',
  styleUrls: ['./add-quide.component.css']
})
export class AddQuideComponent implements OnInit {
  quideAddForm:FormGroup
  constructor(private dashboardService:DashboardService,private fb:FormBuilder,private router:Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.quideAddForm = this.fb.group({
      packId:[null,Validators.required],
      userId:[null,Validators.required]
    })
  }
  get f(){ return this.quideAddForm.controls}

  onSubmit(){
    if (this.quideAddForm.invalid) {
      return;
    }

    this.dashboardService.setQuide(this.f.packId.value,this.f.userId.value)
    .subscribe(data=>{ 
      this.quideAddForm.setValue({
        packId:null,
        userId:null
      })
      this.alertService.success('SuccessFully Added !');
    },(err)=>{
      this.alertService.error("Error on provided values");
    })

    
}

}
