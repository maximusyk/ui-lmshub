import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INavItem, NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './nav-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  @Input() navItems: INavItem[] = [];
}
