import {NgModule} from '@angular/core';
import {NumberMaskDirective} from './number-mask.directive';


@NgModule({
  declarations: [NumberMaskDirective],
  exports: [NumberMaskDirective]
})
export class NumberMaskModule { }
