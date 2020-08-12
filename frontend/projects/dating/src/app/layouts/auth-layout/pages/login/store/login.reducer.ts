import {createReducer, on} from "@ngrx/store";
import {ISignedIn, login, loginFailed, loginSuccess} from "..";

export const LOGIN_FEATURE_NAME = 'login'

export interface IAuthData {
  accessToken: string
  id: number
  iat: number
  /**
   * expired At timestamp
   */
  exp: number
}

export interface ILoginState {
  loading: boolean
  loaded: boolean
  shortCode: string
  authData: IAuthData
}

const initialState: ILoginState = {
  loading: false,
  loaded: true,
  shortCode: null,
  authData: null
}

export const loginReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    loading: true,
    shortCode: null,
    authData: null
  })),
  on(loginSuccess,
    (state, {type, shortCode, ...authData}: {type: string} & {shortCode: string} & ISignedIn) => ({
    ...state,
    loading: false,
    shortCode,
    authData
  })),
  on(loginFailed, (state, {shortCode}) => ({
    ...state,
    loading: false,
    shortCode
  })),
)
