import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@auth/data-access/services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { userActions } from './users.actions';
@Injectable()
export class UsersEffect {
  constructor(private usersService: UsersService, private actions$: Actions, private router: Router) {}

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.createUser),
      exhaustMap((action) =>
        this.usersService.create(action.createData).pipe(
          map((user) => userActions.createUserSuccess({ user })),
          catchError((error) => of(userActions.createUserFailure({ error }))),
        ),
      ),
    );
  });

  readCurrent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.readCurrentUser),
      exhaustMap(() =>
        this.usersService.getCurrent().pipe(
          map((user) => userActions.readCurrentUserSuccess({ user })),
          catchError((error) => of(userActions.readCurrentUserFailure({ error }))),
        ),
      ),
    );
  });

  readAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.readAllUsers),
      exhaustMap(() =>
        this.usersService.getAll().pipe(
          map((users) => userActions.readAllUsersSuccess({ users })),
          catchError((error) => of(userActions.readAllUsersFailure({ error }))),
        ),
      ),
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.updateUser),
      exhaustMap((action) =>
        this.usersService.update(action.userId, action.updateData).pipe(
          map((user) => userActions.updateUserSuccess({ user })),
          catchError((error) => of(userActions.updateUserFailure({ error }))),
        ),
      ),
    );
  });

  remove$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.removeUser),
      exhaustMap((action) =>
        this.usersService.delete(action.id).pipe(
          map((deleteResponse) => userActions.removeUserSuccess({ deleteResponse })),
          catchError((error) => of(userActions.removeUserFailure({ error }))),
        ),
      ),
    );
  });
}
