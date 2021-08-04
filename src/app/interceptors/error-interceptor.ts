import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(null, (err: HttpErrorResponse) => {
        let message;
        debugger;
        switch (err.status) {
          case 401:
            message = `Access Forbidden`;
            break;
          case 400:
            message = 'No data found';
            break;
          case 404:
            message = `Not found: ${err.error}`;
            break;
          case 406:
            message = `${err.error}`;
            break;
          case 409:
            message = `Conflict: ${err.error}`;
            break;
          case 500:
            message = `Server error`;
            break;
          default:
            message = 'Server error';
            break;
        }
        console.log(message);
        
      })
    );
  }
}
