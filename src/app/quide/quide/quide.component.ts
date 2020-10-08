import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {DashboardService} from './../../services/dashboard.service';

@Component({
  selector: 'app-quide',
  templateUrl: './quide.component.html',
  styleUrls: ['./quide.component.css']
})
export class QuideComponent implements OnInit {
  currentUser:any
  userType:any
  notifications:any

  constructor( private authService:AuthService,private dashboardService:DashboardService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
    
     
   }

  ngOnInit(): void {
    this.dashboardService.quideReceiveNotification()
    .subscribe((data)=>{
      this.notifications=data
    })
  }

}
