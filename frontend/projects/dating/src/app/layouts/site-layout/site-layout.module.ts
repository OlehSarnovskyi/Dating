import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SiteLayoutComponent} from "./site-layout.component";
import {HeaderModule} from "./components/header/header.module";


const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: '', redirectTo: 'dashboard'},
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./pages/chat/chat-page.module').then(m => m.ChatPageModule)
      }
    ]
  }
]

@NgModule({
  declarations: [SiteLayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [RouterModule]
})
export class SiteLayoutModule {
}
