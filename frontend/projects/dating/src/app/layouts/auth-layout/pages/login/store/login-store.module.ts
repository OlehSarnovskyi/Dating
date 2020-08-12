import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {LOGIN_FEATURE_NAME, loginReducer} from "./login.reducer";


@NgModule({
  imports: [StoreModule.forFeature(LOGIN_FEATURE_NAME, loginReducer)]
})
export class LoginStoreModule { }
