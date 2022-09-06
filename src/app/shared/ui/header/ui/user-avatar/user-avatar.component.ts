import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getCurrentUserInitials } from '@auth/data-access/state/users/users.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/data-access/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatarComponent {
  profileInitials$: Observable<string>;

  constructor(private _store: Store<AppState>) {
    this.profileInitials$ = this._store.select(getCurrentUserInitials);
  }
}
