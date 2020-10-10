import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service'
import {AuthService} from './../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from './../../services/alert.service'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification:any
  currentUser:any
  userType:any
  constructor(private dashboardService:DashboardService,private authService:AuthService , private router:Router,private alertService: AlertService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
   }

  ngOnInit(): void {
    this.dashboardService.getAllNotificationTravelAgent(this.currentUser.username)
    .subscribe((data)=>{
      this.notification=data
    })
  }

  sendNotification(id,relatedPackId){
    this.dashboardService.sendNotificationToAllQuide("New request from the user arrived",true,this.currentUser.username,"QUIDE",relatedPackId)
    .subscribe((data)=>{
      this.dashboardService.updateNotification(id)
    .subscribe((data)=>{
      location.reload()
      this.alertService.success("Successfully Sent")
    })

    })
    
    
  }

}
