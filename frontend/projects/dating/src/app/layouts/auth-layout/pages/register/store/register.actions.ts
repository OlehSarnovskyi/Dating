import {createAction, props} from "@ngrx/store";
import {IUser} from "../models/user";

export const register = createAction(
  '[Register] register',
  props<IUser>()
)

export const registerSuccess = createAction(
  '[Register] register success',
  props<{ shortCode: string }>()
)

export const registerFailed = createAction(
  '[Register] register failed',
  props<{ shortCode: string }>()
)
