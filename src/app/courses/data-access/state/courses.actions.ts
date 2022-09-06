import { ICourseEntity, ICreateCourseRequest } from '@courses/data-access/state/courses.models';
import { createAction, props } from '@ngrx/store';
import { IDeleteResponse } from '@shared/types/general.types';

export enum CoursesActionTypes {
  CREATE = '[Courses] Create',
  CREATE_SUCCESS = '[Courses] Create Success',
  CREATE_FAILURE = '[Courses] Create Failure',

  READ_ALL = '[Courses] Read All',
  READ_ALL_SUCCESS = '[Courses] Read All Success',
  READ_ALL_FAILURE = '[Courses] Read All Failure',

  READ_ONE = '[Courses] Read One',
  READ_ONE_SUCCESS = '[Courses] Read One Success',
  READ_ONE_FAILURE = '[Courses] Read One Failure',

  UPDATE = '[Courses] Update',
  UPDATE_SUCCESS = '[Courses] Update Success',
  UPDATE_FAILURE = '[Courses] Update Failure',

  REMOVE = '[Courses] Remove',
  REMOVE_SUCCESS = '[Courses] Remove Success',
  REMOVE_FAILURE = '[Courses] Remove Failure',
}

export const createCourse = createAction(
  CoursesActionTypes.CREATE,
  props<{createData: ICreateCourseRequest}>(),
)
export const createCourseSuccess = createAction(
  CoursesActionTypes.CREATE_SUCCESS,
  props<{course: ICourseEntity}>(),
)
export const createCourseFailure = createAction(
  CoursesActionTypes.CREATE_FAILURE,
  props<{error: string}>(),
)

export const readAllCourses = createAction(
  CoursesActionTypes.READ_ALL
);
export const readAllCoursesSuccess = createAction(
  CoursesActionTypes.READ_ALL_SUCCESS,
  props<{courses: ICourseEntity[]}>(),
);
export const readAllCoursesFailure = createAction(
  CoursesActionTypes.READ_ALL_FAILURE,
  props<{error: string}>(),
);

export const readOneCourse = createAction(
  CoursesActionTypes.READ_ONE,
  props<{courseId: string}>(),
);
export const readOneCourseSuccess = createAction(
  CoursesActionTypes.READ_ONE_SUCCESS,
  props<{course: ICourseEntity}>(),
);
export const readOneCourseFailure = createAction(
  CoursesActionTypes.READ_ONE_FAILURE,
  props<{error: string}>(),
);

export const updateCourse = createAction(
  CoursesActionTypes.UPDATE,
  props<{courseId: string; updateData: ICourseEntity}>(),
);
export const updateCourseSuccess = createAction(
  CoursesActionTypes.UPDATE_SUCCESS,
  props<{course: ICourseEntity}>(),
);
export const updateCourseFailure = createAction(
  CoursesActionTypes.UPDATE_FAILURE,
  props<{error: string}>(),
);

export const removeCourse = createAction(
  CoursesActionTypes.REMOVE,
  props<{courseId: string}>(),
);
export const removeCourseSuccess = createAction(
  CoursesActionTypes.REMOVE_SUCCESS,
  props<{deleteResponse: IDeleteResponse}>(),
);
export const removeCourseFailure = createAction(
  CoursesActionTypes.REMOVE_FAILURE,
  props<{error: string}>(),
);

export const courseActions = {
  createCourse,
  createCourseSuccess,
  createCourseFailure,
  readAllCourses,
  readAllCoursesSuccess,
  readAllCoursesFailure,
  readOneCourse,
  readOneCourseSuccess,
  readOneCourseFailure,
  updateCourse,
  updateCourseSuccess,
  updateCourseFailure,
  removeCourse,
  removeCourseSuccess,
  removeCourseFailure,
}
