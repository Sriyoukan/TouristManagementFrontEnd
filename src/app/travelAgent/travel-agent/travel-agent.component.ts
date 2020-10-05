import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';

@Component({
  selector: 'app-travel-agent',
  templateUrl: './travel-agent.component.html',
  styleUrls: ['./travel-agent.component.css']
})
export class TravelAgentComponent implements OnInit {
  currentUser:any
  userType:any
  constructor(private authService:AuthService) { 
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
  }

  ngOnInit(): void {
  }

}
