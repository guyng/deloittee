import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: 'succeeded' | 'failed';
    debugger;
    return next.handle(req).pipe(
      tap(
        (success) => {
          if (success instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        (error) => (status = 'failed')
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = `${req.method} ${req.urlWithParams} ${status} in ${elapsedTime}ms`;
        if (status == 'failed') {
          console.error(message);
        } else {
          console.log(message);
        }
      })
    );
  }
}
