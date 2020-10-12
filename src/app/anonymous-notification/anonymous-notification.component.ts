import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../services/dashboard.service';
import {AuthService} from './../services/auth.service'

@Component({
  selector: 'app-anonymous-notification',
  templateUrl: './anonymous-notification.component.html',
  styleUrls: ['./anonymous-notification.component.css']
})
export class AnonymousNotificationComponent implements OnInit {
  notifications:any
  currentUser:any
  userType:any
  constructor(private dashboardService:DashboardService, private authService:AuthService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
   }

  ngOnInit(): void {
    this.dashboardService.getAllAnonymousNotification()
    .subscribe((data)=>{
      this.notifications=data
    })
  }

}
