import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {LanguageTranslationModule} from "shared/modules/language-translation/language-translation.module";
import {MaterialModule} from "shared/modules/material/material.module";


const modules = [
  LanguageTranslationModule,
  MaterialModule,
  RouterModule
]

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class SharedModulesModule { }
