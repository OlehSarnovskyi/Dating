import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchPageComponent} from "./search-page.component";


const routes: Routes = [
  {path: '', component: SearchPageComponent}
]

const components = [
  SearchPageComponent
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
export class SearchModule { }
