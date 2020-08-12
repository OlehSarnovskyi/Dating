import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {LoginFormComponent} from './components/login-form/login-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
