import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthLayoutComponent} from "./auth-layout.component";


const routes: Routes = [
  {path: '', component: AuthLayoutComponent}
]

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthLayoutComponent,
    RouterModule
  ]
})
export class AuthLayoutModule { }
