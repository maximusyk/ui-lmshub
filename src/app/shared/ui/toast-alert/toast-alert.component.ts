import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularToastifyModule } from 'angular-toastify';

@Component({
  selector: 'app-toast-alert',
  standalone: true,
  imports: [AngularToastifyModule],
  templateUrl: './toast-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ToastAlertComponent {}
