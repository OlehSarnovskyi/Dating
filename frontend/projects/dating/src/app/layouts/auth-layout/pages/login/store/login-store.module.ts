import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {JwtModule} from "@auth0/angular-jwt";
import {LOGIN_FEATURE_NAME, LoginEffects, loginReducer, LoginService} from "..";


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
