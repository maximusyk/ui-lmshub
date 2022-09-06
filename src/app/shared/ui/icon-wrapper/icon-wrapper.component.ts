import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon-wrapper',
  standalone: true,
  templateUrl: './icon-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWrapperComponent {}
