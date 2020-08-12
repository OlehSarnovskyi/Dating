import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILoginForm} from "../models/login.interface";
import {Observable} from "rxjs";
import {ISignedInInterface} from "../models/signed-in.interface";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: ILoginForm): Observable<ISignedInInterface> {
    return this.http.post<ISignedInInterface>('/api/auth/login', body)
  }
}
