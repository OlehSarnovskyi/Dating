import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {login, loginFailed, LoginService, loginSuccess} from "..";

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(loginForm => this.loginService.login(loginForm)
      .pipe(
        map(loginSuccessData => loginSuccess(loginSuccessData)),
        catchError(({error}: HttpErrorResponse) => of(loginFailed(error)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}
