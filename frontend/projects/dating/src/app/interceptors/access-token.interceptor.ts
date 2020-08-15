import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {getAccessToken} from "../layouts/auth-layout/pages/login";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store$.pipe(select(getAccessToken)).subscribe((accessToken: string) => {
      if (accessToken) {
        request = request.clone({
          setHeaders: {
            Authorization: accessToken
          }
        })
      }
      return next.handle(request)
    })
    return next.handle(request)
  }
}
