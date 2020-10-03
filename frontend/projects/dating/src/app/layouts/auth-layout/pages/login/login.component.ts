import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getIsAuth, getLoaded, getLoading} from "./store/login.selectors";
import {login} from "./store/login.actions";
import {ILoginForm} from "./models/login.interface";
import {Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(getLoaded))
  isAuth$: Observable<boolean> = this.store$.pipe(select(getIsAuth))

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
  }

  login(data: ILoginForm): void {
    this.store$.dispatch(login(data))

    this.isAuth$
      .pipe(take(1))
      .subscribe(res => {
      if (res) {
        this.router.navigateByUrl('view/chat')
      }
    })
  }
}
