import {NgModule} from '@angular/core';
import {SharedComponentsModule} from "shared/components/shared-components.module";
import {SharedModulesModule} from "shared/modules/shared-modules.module";


const modules = [
  SharedComponentsModule,
  SharedModulesModule
]

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule { }
