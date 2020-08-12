import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {LOGIN_FEATURE_NAME, loginReducer} from "./login.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./login.effects";
import {LoginService} from "../services/login.service";


@NgModule({
  imports: [
    StoreModule.forFeature(LOGIN_FEATURE_NAME, loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [LoginService]
})
export class LoginStoreModule { }
