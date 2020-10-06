import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service';
import {AuthService} from './../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {NavigationComponent} from './../../navigation/navigation/navigation.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



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

 
  userId:any;
  headers:any;
  message:any;
  clicked = false;
  registeredPackage:any

  constructor(private dashBoardServices:DashboardService,private authService:AuthService,private navigation:NavigationComponent,private router:Router) {
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
    this.dashBoardServices.getAllPackage()
    .subscribe((data)=>{
        this.packList=data;
    })
  }

  registerPackage(packId){
    this.dashBoardServices.registerPackage(this.userId,packId)
    .subscribe((data)=>{
      this.dashBoardServices.getAllRegisteredPackage(this.currentUser.username)
      
    })
    this.router.navigate(["/registeredPackage"])
  }

  

}
