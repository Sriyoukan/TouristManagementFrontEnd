import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  currentUser:any;
  public currentregisteredPackageSubject: BehaviorSubject<any>;
  public registeredPackage: Observable<any>;

  private apiUrl = 'http://localhost:8080'


  constructor(private http: HttpClient) {
    this.currentregisteredPackageSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('registeredPackage')));
    this.registeredPackage = this.currentregisteredPackageSubject.asObservable();
    
   }

  getAllPackage(){
    return this.http.get<any>(`${this.apiUrl}/getAllPackage`,{responseType:"json"});
    
  }

  registerPackage(userId,packId){
    return this.http.post<any>(`${this.apiUrl}/registerPackage`,{userId,packId})
    
  }

  getAllRegisteredPackage(email){
    return this.http.post<any>(`${this.apiUrl}/getAllRegisteredPackage`,{email})
    
    

    
    

  }

  getAllTravelAgent(){
    return this.http.get<any>(`${this.apiUrl}/getTravelAgent`)
  }
  getAllQuide(){
    return this.http.get<any>(`${this.apiUrl}/getQuide`)
  }
  getAllNewPackageRequest(){
    return this.http.get<any>(`${this.apiUrl}/getNewRequestsForPackages`)
  }
  acceptPackage(packId){
    return this.http.post<any>(`${this.apiUrl}/addPackage`,{packId})
  }

  getAllAcceptedPackage(){
    return this.http.get<any>(`${this.apiUrl}/acceptedPackage`)
  }

  registerNewPackage(name,placesToVisit,district,providerEmail,hotelsAvailable,transportationMethod,imageUrl){
    return this.http.post<any>(`${this.apiUrl}/package`,{name,placesToVisit,district,providerEmail,hotelsAvailable,transportationMethod,imageUrl})
    
  }
  updatePackage(id,name,placesToVisit,district,providerEmail,hotelsAvailable,transportationMethod){
    return this.http.post<any>(`${this.apiUrl}/packageUpdate`,{id,name,placesToVisit,district,providerEmail,hotelsAvailable,transportationMethod})
  }
  deletePackage(packId){
    return this.http.post<any>(`${this.apiUrl}/deletePackage`,{packId})
  }
  getAllNotificationTravelAgent(email){
    return this.http.post<any>(`${this.apiUrl}/getNotification`,{email})
  }

  sendNotificationToAllQuide(description,isRead,senderEmail,role,relatedPackId){
    return this.http.post<any>(`${this.apiUrl}/notification`,{description,isRead,senderEmail,role,relatedPackId})
  }
  updateNotification(id){
    return this.http.post<any>(`${this.apiUrl}/updateNotification`,{id})
  }

  quideReceiveNotification(){
    return this.http.get<any>(`${this.apiUrl}/getQuideNotification`)
  }

  sendAcceptedRequest(senderEmail,receiverEmail,relatedPackId){
    return this.http.post<any>(`${this.apiUrl}/acceptTour`,{senderEmail,receiverEmail,relatedPackId})
  }


}
