import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {AuthService} from './../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser:any
  userId:any
  userType:any

  constructor(private authService:AuthService) {
    this.authService.currentUser.subscribe(x=>this.currentUser=x);
    this.authService.currentUserType.subscribe(x=>this.userType=x);
    
 }

   

  ngOnInit(): void {
  }

  

}
