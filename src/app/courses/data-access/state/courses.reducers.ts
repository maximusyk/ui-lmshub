import { courseActions } from '@courses/data-access/state/courses.actions';
import { ICourseEntity } from '@courses/data-access/state/courses.models';
import { createReducer, on } from '@ngrx/store';

export interface ICourseState {
  currentCourse: ICourseEntity;
  courses: ICourseEntity[];
  loading: boolean;
  error: string;
}

const initialState: ICourseState = {
  currentCourse: null,
  courses: [],
  loading: null,
  error: null,
}

export const coursesReducer = createReducer(
  initialState,
  on(courseActions.createCourse, (state) => ({ ...state, loading: true, error: null })),
  on(courseActions.createCourseSuccess, (state, { course }) => ({
    ...state,
    loading: false,
    error: null,
    currentCourse: null,
    courses: [...state.courses, course],
  })),
  on(courseActions.createCourseFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(courseActions.readOneCourse, (state) => ({ ...state, loading: true, error: null })),
  on(courseActions.readOneCourseSuccess, (state, { course }) => ({
    ...state,
    loading: false,
    error: null,
    currentCourse: course,
  })),
  on(courseActions.readOneCourseFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(courseActions.readAllCourses, (state) => ({ ...state, loading: true, error: null })),
  on(courseActions.readAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    loading: false,
    error: null,
    courses,
  })),
  on(courseActions.readAllCoursesFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(courseActions.updateCourse, (state) => ({ ...state, loading: true, error: null })),
  on(courseActions.updateCourseSuccess, (state, { course }) => ({
    ...state,
    loading: false,
    error: null,
    currentCourse: course,
    courses: state.courses.map((courseItem) => courseItem.id === course.id ? course : courseItem),
  })),
  on(courseActions.updateCourseFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(courseActions.removeCourse, (state) => ({ ...state, loading: true, error: null })),
  on(courseActions.removeCourseSuccess, (state, { deleteResponse }) => ({
    ...state,
    loading: false,
    error: null,
    currentCourse: null,
    courses: state.courses.filter((course) => course.id !== deleteResponse.id),
  })),
  on(courseActions.removeCourseFailure, (state, { error }) => ({ ...state, loading: false, error: error })),
);
