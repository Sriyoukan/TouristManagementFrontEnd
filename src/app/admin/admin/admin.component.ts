import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {DashboardService} from './../../services/dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser:any
  userType:any
  agentList:any
  quideList:any
  newRequestList:any
  acceptedList:any

  constructor(private authService:AuthService,private dashBoardService:DashboardService) { 
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
    this.getAllTravelAgent()
    this.getAllQuide()
    this.getAllNewPackageRequest()
    this.getAcceptedPackage()
  }

  ngOnInit(): void {
  }
  getAllTravelAgent(){
    this.dashBoardService.getAllTravelAgent()
    .subscribe((data)=>{
      this.agentList=data;
    })
  }
  getAllQuide(){
    this.dashBoardService.getAllQuide()
    .subscribe((data)=>{
      this.quideList=data;
    })
  }
  getAllNewPackageRequest(){
    this.dashBoardService.getAllNewPackageRequest()
    .subscribe((data)=>{
      this.newRequestList=data;
    })
  }
  acceptPackage(packId){
    this.dashBoardService.acceptPackage(packId)
    .subscribe((data)=>{
      location.reload();
    })
  }
  getAcceptedPackage(){
    this.dashBoardService.getAllAcceptedPackage()
    .subscribe((data)=>{
      this.acceptedList=data
    })
  }


}
