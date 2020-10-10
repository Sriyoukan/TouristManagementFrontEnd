import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service';
import {AuthService} from './../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {NavigationComponent} from './../../navigation/navigation/navigation.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlertService} from './../../services/alert.service'




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
     currentUser:any;
     userType:any;
     formgroup:FormGroup
  
  public packList:any;

 reviewForm:FormGroup
  userId:any;
  headers:any;
  message:any;
  clicked = false;
  registeredPackage:any
  reviews:any

  constructor(private dashBoardServices:DashboardService,private authService:AuthService,private navigation:NavigationComponent,private router:Router,private formBuilder:FormBuilder,private alertService:AlertService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
    
    if(this.currentUser){
      this.authService.getUser(this.currentUser.username)
      .subscribe((data)=>{
        this.userId=data.id
        
      })


    }
    

      
  
  
  }
      
      
      
      
   

  ngOnInit(): void {
    if(this.currentUser){
    this.dashBoardServices.getAllRegisteredPackage(this.currentUser.username)
    .subscribe((data)=>{
      this.registeredPackage=data
    })
  }
    this.dashBoardServices.getAllPackage()
    .subscribe((data)=>{
        this.packList=data;
    })

    this.dashBoardServices.getReviews()
    .subscribe((data)=>{
      this.reviews = data
    })

    this.reviewForm = this.formBuilder.group({
      description:[null,Validators.required]
    })
  }
  get f(){ return this.reviewForm.controls}

  onSubmit(){
    if (this.reviewForm.invalid) {
      return;
    }

    this.dashBoardServices.sendReviews(this.currentUser.username,this.f.description.value)
    .subscribe((data)=>{
      this.f.description.setValue(null);
      location.reload()
    })
  }

  registerPackage(packId){
    this.dashBoardServices.registerPackage(this.userId,packId)
    .subscribe((data)=>{
      this.dashBoardServices.getAllRegisteredPackage(this.currentUser.username)
      .subscribe((data)=>{
        this.registeredPackage=data
        this.alertService.success("Success Fully Registered")
      })
      
    })
    this.router.navigate(["/registeredPackage"])
  }

  deleteReview(id){
    this.dashBoardServices.deleteReview(id)
    .subscribe((data)=>{
      location.reload()
    })
  }

  

}
