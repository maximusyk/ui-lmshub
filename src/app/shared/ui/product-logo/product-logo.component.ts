import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductLogoComponent {}
