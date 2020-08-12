import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LanguageTranslationModule} from "modules/shared/language-translation/language-translation.module";
import {ScrollbarModule} from "modules/components/scrollbar/scrollbar.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {DEFAULT_ROUTER_FEATURENAME, routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {LoginStoreModule} from "./layouts/auth-layout/pages/login/store/login-store.module";
import {EffectsModule} from "@ngrx/effects";


const NGRX_MODULES = [
  StoreModule.forRoot({
    [DEFAULT_ROUTER_FEATURENAME]: routerReducer
  }, {}),
  StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  StoreRouterConnectingModule.forRoot(),
  EffectsModule.forRoot([]),
  LoginStoreModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...NGRX_MODULES,
    LanguageTranslationModule,
    ScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
