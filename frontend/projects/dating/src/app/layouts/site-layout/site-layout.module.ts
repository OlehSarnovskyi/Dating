import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SiteLayoutComponent} from "./site-layout.component";
import {HeaderModule} from "modules/components/header/header.module";


const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)}
    ]
  }
]

@NgModule({
  declarations: [SiteLayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [
    SiteLayoutComponent,
    RouterModule
  ]
})
export class SiteLayoutModule {
}
