import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {JwtModule} from "@auth0/angular-jwt";
import {LOGIN_FEATURE_NAME, loginReducer} from "./login.reducer";
import {LoginEffects} from "./login.effects";
import {LoginService} from "../services/login.service";


@NgModule({
  imports: [
    StoreModule.forFeature(LOGIN_FEATURE_NAME, loginReducer),
    EffectsModule.forFeature([LoginEffects]),
    JwtModule.forRoot({
      config: {
        tokenGetter: request => request as any
      }
    })
  ],
  providers: [LoginService]
})
export class LoginStoreModule { }
