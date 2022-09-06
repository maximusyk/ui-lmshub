import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/data-access/services/auth.service';
import { logout, refreshToken } from '@auth/data-access/state/auth/auth.actions';
import { Store } from '@ngrx/store';
import { storage } from '@shared/utils/storage/storage.utils';
import { ToastService } from 'angular-toastify';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private _toastService: ToastService,
    private _router: Router,
    private _authService: AuthService,
    private _store: Store,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this._toastService.error(error.error.message);
          return this.handle401Error(request, next, error);
        } else if (error.status === 403) {
          this._toastService.error(error.error.message);
          storage.removeItem('App/accessToken');
          return throwError(() => error);
        } else {
          this._toastService.error(error.error.message);
          console.error(error);
          return throwError(() => error);
        }
      }),
    );
  }

  private handle401Error(request: HttpRequest<unknown>, next: HttpHandler, error: HttpErrorResponse) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      this._store.dispatch(refreshToken());
      return next.handle(request);
    } else {
      this._router.navigate(['/auth/login']);
      this._toastService.error(error.error.message);
      this._store.dispatch(logout());
      return throwError(() => error);
    }
  }
}
