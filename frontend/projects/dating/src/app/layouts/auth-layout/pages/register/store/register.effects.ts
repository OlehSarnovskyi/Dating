import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {RegisterService} from "../services/register.service";
import {register, registerFailed, registerSuccess} from "./register.actions";

@Injectable()
export class RegisterEffects {

  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    switchMap(registerForm => this.registerService.register(registerForm)
      .pipe(
        map(registerSuccessData => registerSuccess(registerSuccessData)),
        catchError(({error}: HttpErrorResponse) => {
          console.log(error)
          return of(registerFailed(error))
        })
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private registerService: RegisterService
  ) {}
}
