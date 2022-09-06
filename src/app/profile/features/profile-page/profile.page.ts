import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileFormComponent } from '@profile/ui/profile-form/profile-form.component';
import { ProfileImageComponent } from '@profile/ui/profile-image/profile-image.component';


@Component({
  standalone: true,
  imports: [ProfileImageComponent, ProfileFormComponent],
  templateUrl: './profile.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
}
