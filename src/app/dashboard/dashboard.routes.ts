import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: async () => (await import('./dashboard.page')).DashboardPage,
  },
];
