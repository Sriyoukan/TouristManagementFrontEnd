import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service'
import {AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification:any
  currentUser:any
  constructor(private dashboardService:DashboardService,private authService:AuthService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
   }

  ngOnInit(): void {
    this.dashboardService.getAllNotificationTravelAgent(this.currentUser.username)
    .subscribe((data)=>{
      this.notification=data
    })
  }

}
