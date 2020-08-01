import {NgModule} from '@angular/core';
import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MyMissingTranslationHandler} from "./missing-translation.handler";


@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class LanguageTranslationModule {
  constructor(private translate: TranslateService) {
    // Gets Default language from browser if available, otherwise set English ad default
    this.translate.addLangs(['ua', 'ru', 'en'])
    const browserLang = this.translate.getBrowserLang()
    this.translate.use(browserLang.match(/ua|ru|en/) ? browserLang : 'ua')
  }
}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
