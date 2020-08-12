import {createReducer, on} from "@ngrx/store";
import {login, loginFailed, loginSuccess} from "./login.actions";

export const LOGIN_FEATURE_NAME = 'login'

export interface IAuthData {
  accessToken: string
}

export interface ILoginState {
  loading: boolean
  loaded: boolean
  serverError: string
  authData: IAuthData
}

const initialState: ILoginState = {
  loading: false,
  loaded: true,
  serverError: null,
  authData: null
}

export const loginReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    loading: true,
    serverError: null,
    authData: null
  })),
  on(loginSuccess, (state, {accessToken}) => ({
    ...state,
    loading: false,
    serverError: null,
    authData: {
      accessToken
    }
  })),
  on(loginFailed, (state, {shortCode}) => ({
    ...state,
    loading: false,
    serverError: shortCode
  })),
)
