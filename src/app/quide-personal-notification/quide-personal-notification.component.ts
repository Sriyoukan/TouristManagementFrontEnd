import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../services/dashboard.service';
import {AuthService} from './../services/auth.service'
@Component({
  selector: 'app-quide-personal-notification',
  templateUrl: './quide-personal-notification.component.html',
  styleUrls: ['./quide-personal-notification.component.css']
})
export class QuidePersonalNotificationComponent implements OnInit {
  notifications:any
  currentUser:any
  userType:any
  constructor(private dashboardService:DashboardService,private authService:AuthService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
   }

  ngOnInit(): void {
    this.dashboardService.getAllQuidePersonalNotification(this.currentUser.username)
    .subscribe((data)=>{
      this.notifications=data
    })
  }

}
