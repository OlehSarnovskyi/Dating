import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/user";

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<any> {
    return this.http.post('/api/auth/register', user)
  }
}
