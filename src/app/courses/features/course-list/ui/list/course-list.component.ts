import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICourseEntity } from '@courses/data-access/state/courses.models';
import { CourseItemComponent } from '../item/course-item.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseItemComponent],
  templateUrl: './course-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() courseList: ICourseEntity[];
}
