import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { storage } from '@shared/utils/storage/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private _router: Router) {}

  canLoad(_: Route, segments: UrlSegment[]): boolean {
    const isAuthorized = !!storage.getItem('App/accessToken');
    if (isAuthorized) {
      return true;
    }

    const callbackURL = segments.map((s) => s.path).join('/');
    this._router.navigate(['/auth/login'], { queryParams: { callbackURL } });
    return false;
  }
}
