import {NgModule} from '@angular/core';
import {AutocompletePipe} from "./autocomplete.pipe";


@NgModule({
  declarations: [AutocompletePipe],
  exports: [AutocompletePipe]
})
export class AutocompletePipeModule { }
