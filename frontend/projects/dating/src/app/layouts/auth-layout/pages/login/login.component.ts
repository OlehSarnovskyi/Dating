import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ILoginForm} from "./models/login.interface";
import {LoginService} from "./services/login.service";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getLoaded, getLoading, getServerError} from "./store/login.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(getLoaded))
  serverError$: Observable<string> = this.store$.pipe(select(getServerError))

  constructor(private store$: Store,
              private service: LoginService) { }

  ngOnInit(): void {
  }

  login(data: ILoginForm): void {
    this.service.login(data).subscribe(val => {
      console.log(val)
    })
  }
}
