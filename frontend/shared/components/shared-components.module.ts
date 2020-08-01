import {NgModule} from '@angular/core';
import {HeaderComponent} from "shared/components/header/header.component";
import {SharedModulesModule} from "shared/modules/shared-modules.module";
import { ScrollbarComponent } from './scrollbar/scrollbar.component';


const components = [
  HeaderComponent,
  ScrollbarComponent
]


@NgModule({
  declarations: [...components],
  imports: [SharedModulesModule],
  exports: [...components]
})
export class SharedComponentsModule { }
