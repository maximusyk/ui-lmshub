import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { readAllCourses } from '@courses/data-access/state/courses.actions';
import { ICourseEntity } from '@courses/data-access/state/courses.models';
import { ICourseState } from '@courses/data-access/state/courses.reducers';
import { getAllCourses } from '@courses/data-access/state/courses.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseListComponent } from './ui/list/course-list.component';

export type CourseTence = 'past' | 'current' | 'future';

@Component({
  standalone: true,
  imports: [CommonModule, CourseListComponent],
  templateUrl: './course-list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListPage {
  courseList$: Observable<ICourseEntity[]>;
  courseTence: CourseTence;

  constructor(
    private _store: Store<ICourseState>,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(readAllCourses());
    this.courseList$ = this._store.select(getAllCourses);
    if (this._router.snapshot.params['courseTence']) {
      this.courseTence = this._router.snapshot.params['courseTence'];
    } else {
      this.courseTence = 'current';
      this._router.snapshot.params;
    }
    this.courseTence = this._router.snapshot.params['courseTence'] ?? 'current';
  }
}
