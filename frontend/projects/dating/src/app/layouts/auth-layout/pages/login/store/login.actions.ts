import {createAction, props} from "@ngrx/store";
import {ILoginForm, ISignedIn} from "..";

export const login = createAction(
  '[Login] login',
  props<ILoginForm>()
)

export const loginSuccess = createAction(
  '[Login] login success',
  props<ISignedIn>()
)

export const loginFailed = createAction(
  '[Login] login failed',
  props<{shortCode: string}>()
)
