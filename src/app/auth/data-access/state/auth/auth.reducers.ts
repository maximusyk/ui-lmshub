import { createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

export interface IAuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
}

const initialState: IAuthState = {
  isAuthenticated: true,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(authActions.loginSuccess, (state) => ({ ...state, loading: false, error: null, isAuthenticated: true })),
  on(authActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    isAuthenticated: false,
    error: error,
  })),

  on(authActions.logout, (state) => ({ ...state, loading: true, error: null })),
  on(authActions.logoutSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
    isAuthenticated: false,
  })),
  on(authActions.logoutFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(authActions.refreshToken, (state) => ({ ...state, loading: true, error: null })),
  on(authActions.refreshTokenSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
    isAuthenticated: true,
  })),
  on(authActions.refreshTokenFailure, (state, { error }) => ({
    ...state,
    loading: false,
    isAuthenticated: false,
    error: error,
  })),
);
