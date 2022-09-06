import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HeroMoon, HeroSun } from '@ng-icons/heroicons/outline';
import { ThemeService } from '@shared/data-access/theme/theme.service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      HeroMoon,
      HeroSun,
    }),
  ],
})
export class ThemeSwitchComponent {
  isLightTheme: boolean;

  constructor(private _themeService: ThemeService) {
    this.isLightTheme = this._themeService.currentTheme === 'light';
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    this._themeService.setTheme(this.isLightTheme ? 'light' : 'dark');
  }
}
