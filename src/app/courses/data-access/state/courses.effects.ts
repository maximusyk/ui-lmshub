import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '@courses/data-access/services/courses.service';
import { courseActions } from '@courses/data-access/state/courses.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class CoursesEffect {
  constructor(
    private coursesService: CoursesService,
    private actions$: Actions,
    private router: Router,
  ) {}

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseActions.createCourse),
      exhaustMap((action) =>
        this.coursesService.create(action.createData).pipe(
          map((course) => courseActions.createCourseSuccess({ course })),
          catchError((error) => of(courseActions.createCourseFailure({ error }))),
        )
      )
    );
  });

  readOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseActions.readOneCourse),
      exhaustMap((action) =>
        this.coursesService.getOne(action.courseId).pipe(
          map((course) => courseActions.readOneCourseSuccess({ course })),
          catchError((error) => of(courseActions.readOneCourseFailure({ error }))),
        )
      )
    );
  });

  readAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseActions.readAllCourses),
      exhaustMap(() =>
        this.coursesService.getAll().pipe(
          map((courses) => courseActions.readAllCoursesSuccess({ courses })),
          catchError((error) => of(courseActions.readAllCoursesFailure({ error }))),
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseActions.updateCourse),
      exhaustMap((action) =>
        this.coursesService.update(action.courseId, action.updateData).pipe(
          map((course) => courseActions.updateCourseSuccess({ course })),
          catchError((error) => of(courseActions.updateCourseFailure({ error }))),
        )
      )
    );
  });

  remove$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseActions.removeCourse),
      exhaustMap((action) =>
        this.coursesService.delete(action.courseId).pipe(
          map((deleteResponse) => courseActions.removeCourseSuccess({ deleteResponse })),
          catchError((error) => of(courseActions.removeCourseFailure({ error }))),
        )
      )
    );
  });
}
