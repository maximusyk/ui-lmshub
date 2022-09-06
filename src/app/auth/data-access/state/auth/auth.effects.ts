import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/data-access/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { storage } from '@shared/utils/storage/storage.utils';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { readCurrentUser } from '../users/users.actions';
import { authActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private authService: AuthService,
    private _store: Store,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap((action) =>
        this.authService.loginLocal(action.loginData).pipe(
          map((token) => {
            storage.setItem('App/accessToken', token.accessToken);
            this._store.dispatch(readCurrentUser());
            this._router.navigate(['..']);
            return authActions.loginSuccess({ token });
          }),
          catchError((error) => of(authActions.loginFailure({ error }))),
        ),
      ),
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.logout),
      exhaustMap(() => {
        this._router.navigate(['/auth/login']);
        storage.removeItem('App/accessToken');
        return of(authActions.logoutSuccess());
      }),
    );
  });

  refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.refreshToken),
      exhaustMap(() =>
        this.authService.refreshToken().pipe(
          map((token) => {
            storage.setItem('App/accessToken', token.accessToken);
            return authActions.refreshTokenSuccess({ token });
          }),
          catchError((error) => of(authActions.refreshTokenFailure({ error }))),
        ),
      ),
    );
  });
}
