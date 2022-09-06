import { AuthEffects } from '@auth/data-access/state/auth/auth.effects';
import { UsersEffect } from '@auth/data-access/state/users/users.effects';
import { CoursesEffect } from '@courses/data-access/state/courses.effects';

export const appEffects = [UsersEffect, AuthEffects, CoursesEffect];
