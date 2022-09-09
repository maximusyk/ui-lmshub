import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { logout } from '@auth/data-access/state/auth/auth.actions';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { IonLogOut, IonLogOutOutline } from '@ng-icons/ionicons';
import { Store } from '@ngrx/store';
import { AppLogoComponent } from '../app-logo/app-logo.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { INavItem, NavItemComponent } from './nav-item/nav-item.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { storage } from '@shared/utils/storage/storage.utils';
import {
  MatKeyboardDoubleArrowLeft,
  MatKeyboardDoubleArrowRight,
} from '@ng-icons/material-icons/baseline';
import { BehaviorSubject } from 'rxjs';

const generalNavItems: INavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'hero-home',
    iconActive: 'hero-home-solid',
  },
  {
    label: 'Courses',
    path: '/courses',
    icon: 'hero-book-open',
    iconActive: 'hero-book-open-solid',
  },
  {
    label: 'Schedule',
    path: '/schedule',
    icon: 'hero-calendar',
    iconActive: 'hero-calendar-solid',
  },
  {
    label: 'Exams',
    path: '/exams',
    icon: 'hero-clipboard-check',
    iconActive: 'hero-clipboard-check-solid',
  },
  {
    label: 'Live classroom',
    path: '/live-classroom',
    icon: 'mat-camera-indoor-outline',
    iconActive: 'mat-camera-indoor',
  },
  {
    label: 'Chat',
    path: '/chat',
    icon: 'hero-chat-alt',
    iconActive: 'hero-chat-alt-solid',
  },
  {
    label: 'System Updates',
    path: '/system-updates',
    icon: 'hero-cloud-upload',
    iconActive: 'hero-cloud-upload-solid',
  },
  {
    label: 'Help',
    path: '/help',
    icon: 'hero-question-mark-circle',
    iconActive: 'hero-question-mark-circle-solid',
  },
];

const logoutNavItem: INavItem = {
  label: 'Logout',
  path: '/logout',
  icon: 'ion-log-out-outline',
  iconActive: 'ion-log-out',
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppLogoComponent,
    NavListComponent,
    ThemeSwitchComponent,
    NavItemComponent,
    NgIconComponent,
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      IonLogOutOutline,
      IonLogOut,
      MatKeyboardDoubleArrowLeft,
      MatKeyboardDoubleArrowRight,
    }),
  ],
})
export class SidebarComponent {
  readonly generalNavItems = generalNavItems;
  readonly logoutNavItem = logoutNavItem;
  isSidebarCollapsed = storage.getItem('App/sidebarCollapsed');
  actualIcon = this.logoutNavItem.icon;
  isLoading = false;

  constructor(private _store: Store) {}

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    storage.setItem('App/sidebarCollapsed', this.isSidebarCollapsed);
  }

  onClickSignOut(): void {
    this._store.dispatch(logout());
    // this._router.navigateByUrl('/auth/login');
  }
}
