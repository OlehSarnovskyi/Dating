import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getLoaded, getLoading, getShortCode} from "./store/login.selectors";
import {login} from "./store/login.actions";
import {ILoginForm} from "./models/login.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(getLoaded))
  shortCode$: Observable<string> = this.store$.pipe(select(getShortCode))

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  login(data: ILoginForm): void {
    this.store$.dispatch(login(data))
  }
}
