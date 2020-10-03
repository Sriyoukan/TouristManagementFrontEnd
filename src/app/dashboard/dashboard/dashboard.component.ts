import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service';
import {AuthService} from './../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import {NavigationComponent} from './../../navigation/navigation/navigation.component';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod, Headers} from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public packList:any;
  public currentUser:any;
  userType:any;
  userId:any;
  headers:any;
  message:any;
  clicked = false;
  registeredPackage:any

  constructor(private dashBoardServices:DashboardService,private authService:AuthService,private navigation:NavigationComponent) {
      this.authService.currentUser.subscribe(x=>this.currentUser=x);
      
      
       if(this.currentUser){
        this.authService.getUser(this.currentUser.username)
        .subscribe((data)=>{
          this.userId = data;
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
    this.dashBoardServices.registerPackage(this.userId.id,packId)
    .subscribe((data)=>{
      this.message="Successfully Registered";
    })
  }

}
