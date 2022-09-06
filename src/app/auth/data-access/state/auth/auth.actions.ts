import { createAction, props } from '@ngrx/store';
import { IAuthLoginRequest, IAuthResponse } from './auth.models';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',

  REFRESH = '[Auth] Refresh',
  REFRESH_SUCCESS = '[Auth] Refresh Success',
  REFRESH_FAILURE = '[Auth] Refresh Failure',

  AUTHENTICATE = '[Auth] Authenticate',
  AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success',
  AUTHENTICATE_FAILURE = '[Auth] Authenticate Failure',
}

export const login = createAction(AuthActionTypes.LOGIN, props<{ loginData: IAuthLoginRequest }>());
export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ token: IAuthResponse }>());
export const loginFailure = createAction(AuthActionTypes.LOGIN_FAILURE, props<{ error: string }>());

export const logout = createAction(AuthActionTypes.LOGOUT);
export const logoutSuccess = createAction(AuthActionTypes.LOGOUT_SUCCESS);
export const logoutFailure = createAction(AuthActionTypes.LOGOUT_FAILURE, props<{ error: string }>());

export const refreshToken = createAction(AuthActionTypes.REFRESH);
export const refreshTokenSuccess = createAction(
  AuthActionTypes.REFRESH_SUCCESS,
  props<{ token: IAuthResponse }>(),
);
export const refreshTokenFailure = createAction(AuthActionTypes.REFRESH_FAILURE, props<{ error: string }>());

export const authActions = {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
  refreshToken,
  refreshTokenSuccess,
  refreshTokenFailure,
};
