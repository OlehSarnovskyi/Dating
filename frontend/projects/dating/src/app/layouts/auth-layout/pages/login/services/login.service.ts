import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {ILoginForm, ISignedIn} from "..";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private jwtHelperService: JwtHelperService) { }

  login(body: ILoginForm): Observable<ISignedIn> {
    return this.http.post<ISignedIn>('/api/auth/login', body)
      .pipe(
        map(res => ({
          ...res,
          ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }
}
