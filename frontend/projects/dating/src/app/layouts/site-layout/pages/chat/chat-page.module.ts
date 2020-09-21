import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatPageComponent} from "./chat-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ChatPageComponent}
]

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChatPageComponent,
    RouterModule
  ]
})
export class ChatPageModule {
}
