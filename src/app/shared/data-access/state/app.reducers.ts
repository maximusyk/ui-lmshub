import { authReducer } from '@auth/data-access/state/auth/auth.reducers';
import { usersReducer } from '@auth/data-access/state/users/users.reducers';
import { coursesReducer } from '@courses/data-access/state/courses.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

export const appReducers: ActionReducerMap<AppState> = {
  user: usersReducer,
  auth: authReducer,
  course: coursesReducer
};
