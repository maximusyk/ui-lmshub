import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-classroom.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveClassroomPage {}
