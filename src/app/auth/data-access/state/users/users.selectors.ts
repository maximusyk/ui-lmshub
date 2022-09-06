import { createFeatureSelector, createSelector } from '@ngrx/store';
import { generateInitials } from '@profile/utils/generate-initials.utils';
import { IUserState } from './users.reducers';

export const getUserState = createFeatureSelector<IUserState>('user');

export const getCurrentUser = createSelector(getUserState, (state) => state.currentUser);

export const getAllUsers = createSelector(getUserState, (state) => state.users);

export const getCurrentUserInitials = createSelector(getCurrentUser, (state) =>
  generateInitials({
    firstName: state?.firstName || '',
    lastName: state?.lastName || '',
  }),
);

export const getCurrentUserRole = createSelector(getCurrentUser, (state) => state?.role?.title || '');

export const getUserLoading = createSelector(getUserState, (state) => state.loading);

export const getUserError = createSelector(getUserState, (state) => state.error);
