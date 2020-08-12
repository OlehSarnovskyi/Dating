import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILoginForm} from "../models/login.interface";
import {Observable} from "rxjs";
import {ISignedIn} from "../models/signed-in.interface";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: ILoginForm): Observable<ISignedIn> {
    return this.http.post<ISignedIn>('/api/auth/login', body)
  }
}
