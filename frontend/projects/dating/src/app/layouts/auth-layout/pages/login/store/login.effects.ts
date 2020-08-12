import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {login, loginFailed, loginSuccess} from "./login.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {LoginService} from "../services/login.service";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

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
