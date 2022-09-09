import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getCurrentUser } from '@auth/data-access/state/users/users.selectors';
import { BootstrapList } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HeroMoon, HeroSun } from '@ng-icons/heroicons/outline';
import { OctBell, OctBellFill } from '@ng-icons/octicons';
import { select, Store } from '@ngrx/store';
import { TimeoutEnum } from '@shared/types/general.types';
import { interval, map, Observable } from 'rxjs';
import { AppLogoComponent } from '../app-logo/app-logo.component';
import { IconWrapperComponent } from '../icon-wrapper/icon-wrapper.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { UserAvatarComponent } from './ui/user-avatar/user-avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppLogoComponent,
    IconWrapperComponent,
    NgIconComponent,
    ThemeSwitchComponent,
    UserAvatarComponent,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      OctBell,
      OctBellFill,
      HeroSun,
      HeroMoon,
      BootstrapList,
    }),
  ],
})
export class HeaderComponent implements OnInit {
  notificationIcons = {
    icon: 'oct-bell',
    iconActive: 'oct-bell-fill',
  };
  themeIcons = {
    light: 'hero-sun',
    dark: 'hero-moon',
  };
  constructor(private _store: Store) {
    interval(TimeoutEnum.HOUR).subscribe(() => {
      this.setGreeting(new Date().getHours());
    });
  }
  greeting = '';
  userToGreet: Observable<string> = this._store
    .pipe(select(getCurrentUser))
    .pipe(map(user => user?.firstName || user?.lastName || user?.username || 'Stranger'));

  ngOnInit() {
    this.setGreeting(new Date().getHours());
  }

  setGreeting(hour: number) {
    if (hour >= 6 && hour < 12) {
      this.greeting = 'Morning';
    } else if (hour >= 12 && hour < 18) {
      this.greeting = 'Afternoon';
    } else {
      this.greeting = 'Evening';
    }
  }
}
