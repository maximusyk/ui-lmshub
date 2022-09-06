import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'System Updates',
    loadComponent: async () => (await import('./system-updates.page')).SystemUpdatesPage,
  },
];
