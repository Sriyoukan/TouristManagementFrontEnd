import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser:any
  userType:any
  constructor(private router: Router, private authService:AuthService){
      this.authService.currentUser.subscribe(x=>this.currentUser=x)
      this.authService.currentUserType.subscribe(x=>this.userType=x)

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.currentUser){
        if(next.data.roles != this.userType){
          this.router.navigate([`/${this.userType}`])
          return false
        }
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    
  }
  
}
