import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from "@angular/material/chips";
import {RegisterComponent} from "./register.component";
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {AutocompleteGroupPipeModule} from "modules/pipes/autocomplete-group/autocomplete-group-pipe.module";
import {AutocompletePipeModule} from "modules/pipes/autocomplete/autocomplete-pipe.module";
import {COMMA, ENTER} from "@angular/cdk/keycodes";


const routes: Routes = [
  {path: '', component: RegisterComponent}
]

const pipeModules = [
  AutocompleteGroupPipeModule,
  AutocompletePipeModule
]

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatDividerModule,
  MatChipsModule
]

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ...materialModules,
    ...pipeModules
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }
  ]
})
export class RegisterModule {
}
