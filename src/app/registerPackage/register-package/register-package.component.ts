import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from './../../services/alert.service'
@Component({
  selector: 'app-register-package',
  templateUrl: './register-package.component.html',
  styleUrls: ['./register-package.component.css']
})
export class RegisterPackageComponent implements OnInit {
  registerNewPackageForm:FormGroup
  placesToVisitArray= new Array<String>()
  hotelsAvailableArray=new Array<String>()
  constructor(private dashBoardService:DashboardService,private formBuilder:FormBuilder,private router:Router,private alertService:AlertService) { }

  ngOnInit(): void {
    this.registerNewPackageForm = this.formBuilder.group({
      name:[null,Validators.required],
      placesToVisit:[null],
      district:[null,Validators.required],
      providerEmail:[null,Validators.required],
      hotelsAvailable:[null],
      transportationMethod:[null,Validators.required],
      imageUrl:[null,Validators.required]
    })
  }
  get f(){ return this.registerNewPackageForm.controls}

  onSubmit(){
    if (this.registerNewPackageForm.invalid) {
      return;
    }

    this.dashBoardService.registerNewPackage(this.f.name.value,this.placesToVisitArray,this.f.district.value,this.f.providerEmail.value,this.hotelsAvailableArray,this.f.transportationMethod.value,this.f.imageUrl.value)
    .subscribe(data=>{ 
      this.router.navigate([`/ADMIN`])
      this.alertService.success("Successfully registered")
    })

    
}
addPlaceArray(){
  this.placesToVisitArray.push(this.f.placesToVisit.value)
  this.f.placesToVisit.setValue(null)
  return false
}
addHotelArray(){
  this.hotelsAvailableArray.push(this.f.hotelsAvailable.value)
  this.f.hotelsAvailable.setValue(null)
  return false
}

}
