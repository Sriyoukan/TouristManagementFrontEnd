import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser:any;
  
  public userType:any;
  constructor(private authService:AuthService,private router:Router) {
    this.authService.currentUser.subscribe((x)=>{

      this.currentUser=x;
      
  })
  if(this.currentUser){
    const helper = new JwtHelperService();
       let userBody = helper.decodeToken(this.currentUser.token);
       let roles = userBody.roles;
       
       for(const element of roles ){
          this.userType=element.role
       }

  }
}
      
      
    
    
    
    
     
    


   

  ngOnInit(): void {
  }

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
