import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'login',
    title: 'Login',
    loadComponent: async () => (await import('./feature/login/login.page')).LoginPage,
  },
];
