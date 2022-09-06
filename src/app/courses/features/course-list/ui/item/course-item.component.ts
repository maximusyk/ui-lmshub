import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICourseEntity } from '@courses/data-access/state/courses.models';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { HeroDocumentText } from '@ng-icons/heroicons/outline';
import { EmptyImageComponent } from '@shared/ui/empty-image/empty-image.component';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [CommonModule, EmptyImageComponent, NgIconsModule, RouterModule],
  templateUrl: './course-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideIcons({HeroDocumentText})]
})
export class CourseItemComponent {
  @Input() courseItem: ICourseEntity;
}
