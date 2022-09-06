import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getCurrentUserInitials, getCurrentUserRole } from '@auth/data-access/state/users/users.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {
  profileInitials$: Observable<string>;
  currentUserRole$: Observable<string>;

  userRoleColor(role: string) {
    if (role.toLowerCase() === 'admin') {
      return 'badge-primary';
    }
    if (role.toLowerCase() === 'professor') {
      return 'badge-warning';
    }
    return 'badge-accent';
  }

  constructor(private _store: Store) {
    this.profileInitials$ = this._store.select(getCurrentUserInitials);
    this.currentUserRole$ = this._store.select(getCurrentUserRole);
  }
}
