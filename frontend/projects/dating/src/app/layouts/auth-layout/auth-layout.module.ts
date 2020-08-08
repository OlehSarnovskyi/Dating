import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthLayoutComponent} from "./auth-layout.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)}
    ]
  }
]

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthLayoutModule { }
