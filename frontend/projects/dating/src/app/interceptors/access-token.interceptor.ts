import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getAccessToken} from '../layouts/auth-layout/pages/login';
import {catchError, filter, first} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): (Observable<HttpEvent<any>> | any) {
    this.store$.pipe(
      select(getAccessToken),
      first(),
      filter(accessToken => !!accessToken),
      flatMap((accessToken: string) => {
        const authRequest = request.clone({
            setHeaders: {
              Authorization: accessToken
            }
          })
        return next.handle(authRequest).pipe(
          filter(err => err instanceof HttpErrorResponse && err.status === 401),
          catchError(err => {
            console.log(err)
            return EMPTY
          })
        )
      })
    )
  }
}
