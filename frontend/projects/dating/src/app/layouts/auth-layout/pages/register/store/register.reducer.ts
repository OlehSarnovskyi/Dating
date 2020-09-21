import {createReducer, on} from "@ngrx/store";
import {register, registerFailed, registerSuccess} from "./register.actions";

export const REGISTER_FEATURE_NAME = 'register'

export interface IRegisterState {
  loading: boolean
  loaded: boolean
  shortCode: string
}

const initialState: IRegisterState = {
  loading: false,
  loaded: true,
  shortCode: null
}

export const registerReducer = createReducer(
  initialState,
  on(register, state => ({
    ...state,
    loading: true,
    shortCode: null
  })),
  on(registerSuccess, (state, {shortCode}) => ({
    ...state,
    loading: false,
    shortCode
  })),
  on(registerFailed, (state, {shortCode}) => ({
    ...state,
    loading: false,
    shortCode
  }))
)
