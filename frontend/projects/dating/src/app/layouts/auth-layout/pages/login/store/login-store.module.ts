import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {LOGIN_FEATURE_NAME, loginReducer} from "./login.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./login.effects";
import {LoginService} from "../services/login.service";
import {JwtModule} from "@auth0/angular-jwt";


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
