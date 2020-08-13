import {NgModule} from '@angular/core';
import {AutocompleteGroupPipe} from './autocomplete-group.pipe';


@NgModule({
  declarations: [AutocompleteGroupPipe],
  exports: [AutocompleteGroupPipe]
})
export class AutocompleteGroupPipeModule { }
