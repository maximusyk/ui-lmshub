import { IAuthState } from '@auth/data-access/state/auth/auth.reducers';
import { IUserState } from '@auth/data-access/state/users/users.reducers';
import { ICourseState } from '@courses/data-access/state/courses.reducers';

export interface AppState {
  user: IUserState;
  auth: IAuthState;
  course: ICourseState
}
