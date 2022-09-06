import { createReducer, on } from '@ngrx/store';
import { userActions } from './users.actions';
import { IUserEntity } from './users.models';

export interface IUserState {
  currentUser: IUserEntity;
  users: IUserEntity[];
  loading: boolean;
  error: string;
}

const initialState: IUserState = {
  currentUser: null,
  users: [],
  loading: null,
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  on(userActions.createUser, (state) => ({ ...state, loading: true, error: null })),
  on(userActions.createUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    currentUser: user,
  })),
  on(userActions.createUserFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(userActions.readCurrentUser, (state) => ({ ...state, loading: true, error: null })),
  on(userActions.readCurrentUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    currentUser: user,
  })),
  on(userActions.readCurrentUserFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(userActions.readAllUsers, (state) => ({ ...state, loading: true, error: null })),
  on(userActions.readAllUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    error: null,
    users: users,
  })),
  on(userActions.readAllUsersFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(userActions.updateUser, (state) => ({ ...state, loading: true, error: null })),
  on(userActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    currentUser: user,
  })),
  on(userActions.updateUserFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

  on(userActions.removeUser, (state) => ({ ...state, loading: true, error: null })),
  on(userActions.removeUserSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
    currentUser: null,
    users: state.users.filter((user) => user.id !== state.currentUser.id),
  })),
  on(userActions.removeUserFailure, (state, { error }) => ({ ...state, loading: false, error: error })),
);
