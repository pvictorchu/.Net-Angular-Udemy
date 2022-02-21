import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
@Injectable()
export class CorsInterceptorModule implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({headers: req.headers.append('Access-Control-Allow-Origin', '*')});
    return next.handle(clonedRequest);
  }
}
