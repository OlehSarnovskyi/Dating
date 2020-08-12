import {createReducer, on} from "@ngrx/store";
import {login, loginFailed, loginSuccess} from "./login.actions";

export const LOGIN_FEATURE_NAME = 'login'


export interface ILoginState {
  loading: boolean
  loaded: boolean
  serverError: string
}

const initialState: ILoginState = {
  loading: false,
  loaded: true,
  serverError: null
}

export const loginReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    loading: true
  })),
  on(loginSuccess, (state) => ({
    ...state,
    loading: false,
    serverError: null
  })),
  on(loginFailed, (state, {shortCode}) => ({
    ...state,
    loading: false,
    serverError: shortCode
  })),
)
