import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IUser} from "./models/user";
import {register} from "./store/register.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  register(registerForm: IUser) {
    this.store$.dispatch(register(registerForm))
  }
}
