import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
