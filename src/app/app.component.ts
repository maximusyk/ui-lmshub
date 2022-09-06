import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getIsAuthenticated } from '@auth/data-access/state/auth/auth.selectors';
import { readCurrentUser } from '@auth/data-access/state/users/users.actions';
import { Store } from '@ngrx/store';
import { ThemeService } from '@shared/data-access/theme';
import { NotAuthLayoutComponent } from '@shared/feature/layout/not-auth-layout/not-auth-layout.component';
import { SpinnerComponent } from '@shared/ui/spinner/spinner.component';
import { ToastAlertComponent } from '@shared/ui/toast-alert/toast-alert.component';
import { AuthLayoutComponent } from './shared/feature/layout/auth-layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AuthLayoutComponent,
    NotAuthLayoutComponent,
    SpinnerComponent,
    ToastAlertComponent,
  ],
  templateUrl: './app.component.html',
  providers: [],
})
export class AppComponent implements OnInit {
  isAuthenticate: boolean;
  constructor(private _themeService: ThemeService, private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(readCurrentUser());
    this._store.select(getIsAuthenticated).subscribe((isAuth) => {
      this.isAuthenticate = isAuth;
    });
    this._themeService.init();
  }
}
