import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SpinnerService } from '@shared/ui/spinner/spinner.service';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('App/accessToken');
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    this._spinnerService.isLoading$.next(true);

    if (isApiUrl && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
    }

    return next.handle(request).pipe(
      finalize(() => {
        this._spinnerService.isLoading$.next(false);
      }),
    );
  }
}
