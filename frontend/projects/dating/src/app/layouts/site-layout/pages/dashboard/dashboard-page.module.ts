import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardPageComponent} from "./dashboard-page.component";


const routes: Routes = [
  {path: '', component: DashboardPageComponent}
]

const components = [
  DashboardPageComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ...components,
    RouterModule
  ]
})
export class DashboardPageModule { }
