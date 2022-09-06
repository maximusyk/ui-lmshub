import { createAction, props } from '@ngrx/store';
import { IDeleteResponse } from '@shared/types/general.types';
import { IUserCreateUpdateRequest, IUserEntity } from './users.models';

export enum UsersActionTypes {
  CREATE = '[Users] Create',
  CREATE_SUCCESS = '[Users] Create Success',
  CREATE_FAILURE = '[Users] Create Failure',

  READ_CURRENT = '[Users] Read Current',
  READ_CURRENT_SUCCESS = '[Users] Read Current Success',
  READ_CURRENT_FAILURE = '[Users] Read Current Failure',

  READ_ALL = '[Users] Read All',
  READ_ALL_SUCCESS = '[Users] Read All Success',
  READ_ALL_FAILURE = '[Users] Read All Failure',

  UPDATE = '[Users] Update',
  UPDATE_SUCCESS = '[Users] Update Success',
  UPDATE_FAILURE = '[Users] Update Failure',

  REMOVE = '[Users] Remove',
  REMOVE_SUCCESS = '[Users] Remove Success',
  REMOVE_FAILURE = '[Users] Remove Failure',
}

export const createUser = createAction(
  UsersActionTypes.CREATE,
  props<{ createData: IUserCreateUpdateRequest }>(),
);
export const createUserSuccess = createAction(
  UsersActionTypes.CREATE_SUCCESS,
  props<{ user: IUserEntity }>(),
);
export const createUserFailure = createAction(UsersActionTypes.CREATE_FAILURE, props<{ error: string }>());

export const readCurrentUser = createAction(UsersActionTypes.READ_CURRENT);
export const readCurrentUserSuccess = createAction(
  UsersActionTypes.READ_CURRENT_SUCCESS,
  props<{ user: IUserEntity }>(),
);
export const readCurrentUserFailure = createAction(
  UsersActionTypes.READ_CURRENT_FAILURE,
  props<{ error: string }>(),
);

export const readAllUsers = createAction(UsersActionTypes.READ_ALL);
export const readAllUsersSuccess = createAction(
  UsersActionTypes.READ_ALL_SUCCESS,
  props<{ users: IUserEntity[] }>(),
);
export const readAllUsersFailure = createAction(
  UsersActionTypes.READ_ALL_FAILURE,
  props<{ error: string }>(),
);

export const updateUser = createAction(
  UsersActionTypes.UPDATE,
  props<{ userId: string; updateData: IUserCreateUpdateRequest }>(),
);
export const updateUserSuccess = createAction(
  UsersActionTypes.UPDATE_SUCCESS,
  props<{ user: IUserEntity }>(),
);
export const updateUserFailure = createAction(UsersActionTypes.UPDATE_FAILURE, props<{ error: string }>());

export const removeUser = createAction(UsersActionTypes.REMOVE, props<{ id: string }>());
export const removeUserSuccess = createAction(
  UsersActionTypes.REMOVE_SUCCESS,
  props<{ deleteResponse: IDeleteResponse }>(),
);
export const removeUserFailure = createAction(UsersActionTypes.REMOVE_FAILURE, props<{ error: string }>());

export const userActions = {
  createUser,
  createUserSuccess,
  createUserFailure,
  readCurrentUser,
  readCurrentUserSuccess,
  readCurrentUserFailure,
  readAllUsers,
  readAllUsersSuccess,
  readAllUsersFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  removeUser,
  removeUserSuccess,
  removeUserFailure,
};
