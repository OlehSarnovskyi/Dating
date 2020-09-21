import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {RegisterService} from "../services/register.service";
import {REGISTER_FEATURE_NAME, registerReducer} from "./register.reducer";
import {RegisterEffects} from "./register.effects";


@NgModule({
  imports: [
    StoreModule.forFeature(REGISTER_FEATURE_NAME, registerReducer),
    EffectsModule.forFeature([RegisterEffects])
  ],
  providers: [RegisterService]
})
export class RegisterStoreModule { }
