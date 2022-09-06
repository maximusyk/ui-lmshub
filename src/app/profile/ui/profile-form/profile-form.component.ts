import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { updateUser } from '@auth/data-access/state/users/users.actions';
import { IUserEntity } from '@auth/data-access/state/users/users.models';
import { getCurrentUser } from '@auth/data-access/state/users/users.selectors';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HeroEye, HeroEyeOff } from '@ng-icons/heroicons/outline';
import { Store } from '@ngrx/store';
import { ProfileImageComponent } from '@profile/ui/profile-image/profile-image.component';
import { AppState } from '@shared/data-access/state/app.state';
import { checkUpdateFieldsChanges } from '@shared/utils/check-update-fields-changes.utils';
import { NgxMaskModule } from 'ngx-mask';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ProfileImageComponent, NgIconComponent, ReactiveFormsModule, NgxMaskModule],
  templateUrl: './profile-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideIcons({ HeroEye, HeroEyeOff })],
})
export class ProfileFormComponent implements OnInit {
  form!: FormGroup;
  currentUser$: Observable<IUserEntity>;
  userData: Partial<IUserEntity>;
  isPasswordVisible = false;
  actualPasswordVisibilityIcon = 'hero-eye-off';

  constructor(private _formBuilder: FormBuilder, private readonly _store: Store<AppState>) {}

  ngOnInit() {
    this.currentUser$ = this._store.select(getCurrentUser);
    this.form = this._formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null),
      password: new FormControl(null),
    });
    this.currentUser$.subscribe((user) => {
      if (user) {
        const { password, ...userToParse } = user;
        this.form.patchValue(userToParse);
        this.userData = {
          ...userToParse,
        };
      }
    });
  }

  handleUpdateUserData() {
    if (checkUpdateFieldsChanges(this.userData, this.form.value)) {
      const updateData = { ...this.form.value, password: this.form.value.password || this.userData.password };
      this._store.dispatch(updateUser({ userId: this.userData.id, updateData }));
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.actualPasswordVisibilityIcon = this.isPasswordVisible ? 'hero-eye' : 'hero-eye-off';
  }
}
