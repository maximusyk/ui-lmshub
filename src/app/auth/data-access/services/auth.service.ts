import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { IAuthLoginRequest, IAuthResponse } from '../state/auth/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authEndpoint = environment.apiUrl + '/auth';

  constructor(private http: HttpClient, private _activatedRoute: ActivatedRoute) {}

  loginLocal(loginData: IAuthLoginRequest) {
    return this.http.post<IAuthResponse>(this.authEndpoint + '/local/signin', loginData);
  }

  loginGoogle(accessToken: string) {
    return this.http.post<IAuthResponse>(this.authEndpoint + 'google', { accessToken });
  }

  refreshToken() {
    return this.http.post<IAuthResponse>(this.authEndpoint + '/refresh', {});
  }

  logout() {
    return this.http.post(this.authEndpoint + '/logout', {});
  }
}
