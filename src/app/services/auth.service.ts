import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
 
import * as jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public currentUserTypeSubject: BehaviorSubject<any>;
  public currentUserType: Observable<any>;
  

  private apiUrl = 'http://localhost:8080';
  private userBody:any;
  


  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUserTypeSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUserType')));
    this.currentUserType = this.currentUserTypeSubject.asObservable();
    
   }

   login(email, password) {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, {email, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser',JSON.stringify(user))
        this.currentUserSubject.next(user);
        const helper = new JwtHelperService();
        this.userBody = helper.decodeToken(user.token);
        for(const elements of this.userBody.roles){
          let role = elements.role;
          localStorage.setItem('currentUserType',JSON.stringify(role))
          this.currentUserTypeSubject.next(role);

        }
         
        
        return this.userBody;
        
      }));

  }
  signUp(name,email,mobileNo,password){
    return this.http.post<any>(`${this.apiUrl}/api/auth/registerUser`,{name,email,mobileNo,password})

  }
  registerTravelAgent(name,email,mobileNo,password){
    return this.http.post<any>(`${this.apiUrl}/api/auth/registerTravelAgent`,{name,email,mobileNo,password})

  }
  registerQuide(name,email,mobileNo,password){
    return this.http.post<any>(`${this.apiUrl}/api/auth/registerQuide`,{name,email,mobileNo,password})

  }
  
  getUser(email){
    return this.http.post<any>(`${this.apiUrl}/getUser`,{email})
  }
  
}
