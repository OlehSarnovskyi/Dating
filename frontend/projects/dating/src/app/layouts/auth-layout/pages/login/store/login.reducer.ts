import {createReducer} from "@ngrx/store";

export const LOGIN_FEATURE_NAME = 'login'


export interface ILoginState {
  loading: boolean
  loaded: boolean
  serverError: string
}

const initialState: ILoginState = {
  loading: false,
  loaded: false,
  serverError: null
}

export const loginReducer = createReducer(
  initialState,

)
