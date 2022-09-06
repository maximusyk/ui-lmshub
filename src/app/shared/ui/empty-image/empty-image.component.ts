import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empty-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyImageComponent {}
