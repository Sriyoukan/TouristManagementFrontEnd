import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Observable ,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    user:any
  constructor(public auth: AuthService) {
        this.auth.currentUser.subscribe(x=>this.user=x)
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(this.user){
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.user.token}`
            }
          });
          return next.handle(request)
          .pipe(
              catchError(error => {
                if (error.status === 401 || error.status === 403) {
                  // handle error
                }
                return throwError(error);
              })
           );
    }else{
        return next.handle(request)
    }
    
  
}
}