import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080'


  constructor(private http: HttpClient) { }

  getAllPackage(){
    return this.http.get<any>(`${this.apiUrl}/getAllPackage`,{responseType:"json"});
    
  }
}
