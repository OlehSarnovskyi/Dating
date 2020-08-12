import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ILoginForm} from "./models/login.interface";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  login(data: ILoginForm): void {
    this.service.login(data).subscribe(val => {
      console.log(val)
    })
  }
}
