import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../../services/dashboard.service';
import {AuthService} from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registered-package',
  templateUrl: './registered-package.component.html',
  styleUrls: ['./registered-package.component.css']
})
export class RegisteredPackageComponent implements OnInit {
  currentUser:any;
  userType:any
  registeredPackage:any;

  constructor(private dashBoardServices:DashboardService,private authServices:AuthService,private router:Router) { 
    this.authServices.currentUser.subscribe(x=>this.currentUser=x)
    this.authServices.currentUserType.subscribe(x=>this.userType=x)
    
    
    
    
    
    
  }

  ngOnInit(): void {
    this.dashBoardServices.getAllRegisteredPackage(this.currentUser.username)
    .subscribe((data)=>{
      this.registeredPackage=data
    })
    
  }
 

}
