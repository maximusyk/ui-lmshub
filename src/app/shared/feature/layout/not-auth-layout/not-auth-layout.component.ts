import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-auth-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotAuthLayoutComponent {}
