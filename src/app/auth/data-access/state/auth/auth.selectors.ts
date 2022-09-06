import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducers';

export const getAuthState = createFeatureSelector<IAuthState>('auth');

export const getIsAuthenticated = createSelector(getAuthState, (state) => state.isAuthenticated);

export const getLoading = createSelector(getAuthState, (state) => state.loading);

export const getError = createSelector(getAuthState, (state) => state.error);
