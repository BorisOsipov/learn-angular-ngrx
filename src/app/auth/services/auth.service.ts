import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../shared/types/curentUser.interface';
import {HttpClient} from '@angular/common/http';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {LoginRequestInterface} from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  private getUser = (res: AuthResponseInterface) => res.user;
}
