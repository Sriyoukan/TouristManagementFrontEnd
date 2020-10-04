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

  constructor(private authService:AuthService,private dashBoardService:DashboardService) { 
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
    this.getAllTravelAgent()
  }

  ngOnInit(): void {
  }
  getAllTravelAgent(){
    this.dashBoardService.getAllTravelAgent()
    .subscribe((data)=>{
      this.agentList=data;
    })
  }

}
