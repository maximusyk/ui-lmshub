import { ICourseState } from '@courses/data-access/state/courses.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCourseState = createFeatureSelector<ICourseState>('course');

export const getAllCourses = createSelector(getCourseState, (state) => state.courses);

export const getOneCourse = createSelector(getCourseState, (state) => state.currentCourse);

export const getCourseLoading = createSelector(getCourseState, (state) => state.loading);

export const getCourseError = createSelector(getCourseState, (state) => state.error);
