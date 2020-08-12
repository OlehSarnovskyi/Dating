import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILoginForm} from "../models/login.interface";
import {Observable} from "rxjs";
import {ISignedIn} from "../models/signed-in.interface";
import {map} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";

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
