import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() currentUser:any;
  @Input() userType:any;
  constructor(private authService:AuthService,private router:Router) {
   
    }
      
  ngOnInit(): void {}

  navigateToLogin(){
    
    this.router.navigate(["/login"]);
  }
  navigateToSignUp(){
    this.router.navigate(["/signUp"]);
  }
  navigateToRegisterTravelAgent(){
    this.router.navigate(["/registerTravelAgent"]);
  }
  navigateToRegisterQuide(){
    this.router.navigate(["/registerQuide"]);
  }
  navigateToRegisteredPackage(){
    this.router.navigate(["/registeredPackage"])
  }

  navigateToRegisterPackage(){
    this.router.navigate(["/registerPackage"])
  }
  navigateToAnonymousNotification(){
    this.router.navigate(["/anonymousNotification"])
  }
  navigateToAddQuide(){
    this.router.navigate(["/addQuide"])
  }

  navigateToQuideNotification(){
    this.router.navigate(['/quidePersonalNotification'])
  }

  
  logout(){
    
    this.currentUser=null
    this.userType=null
    localStorage.setItem("currentUser",null);

    this.authService.currentUserSubject=new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));

    this.authService.currentUser=this.authService.currentUserSubject.asObservable();
    this.router.navigate(["/"])
    
    
    return false
  }

}
