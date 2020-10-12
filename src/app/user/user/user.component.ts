import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { interval } from 'rxjs';
import {AuthService} from './../../services/auth.service';
import {DashboardService} from './../../services/dashboard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser:any
  userId:any
  userType:any

  constructor(private authService:AuthService,private dashboardService:DashboardService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x);
    this.authService.currentUserType.subscribe(x=>this.userType=x);
    
 }

   

  ngOnInit(): void {
    interval(2000).subscribe(()=>{
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        const latLong = [coords.latitude, coords.longitude];
        this.dashboardService.setCordinate(coords.latitude,coords.longitude)
        .subscribe((data)=>{
          
        })
        
      })


    })
    
  }

  

}
