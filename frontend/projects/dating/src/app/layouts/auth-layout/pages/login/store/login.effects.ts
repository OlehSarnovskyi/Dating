import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, delayWhen, filter, first, map, switchMap} from "rxjs/operators";
import {of, timer} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {getIsAuth, ISignedIn, login, loginFailed, LoginService, loginSuccess} from "..";
import {select, Store} from "@ngrx/store";

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(loginForm => this.loginService.login(loginForm)
      .pipe(
        map(loginSuccessData => loginSuccess(loginSuccessData)),
        catchError(({error}: HttpErrorResponse) => {
          console.log(error);
          return of(loginFailed(error));
        })
      ))
    )
  )

  refreshToken$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    delayWhen((action: ISignedIn) => timer(action.exp * 1000 - 60 * 1000 - Date.now())),
    map(_ => {
      this.store$.pipe(
        first(),
        select(getIsAuth),
        filter(isAuth => isAuth)
      )
      return _
    }),
    switchMap((data: ISignedIn) => {
      return this.loginService.refreshToken(data.email)
        .pipe(
          map((loginSuccessData: ISignedIn) => loginSuccess(loginSuccessData))
        )
    })
    )
  )

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private store$: Store
  ) {}
}
