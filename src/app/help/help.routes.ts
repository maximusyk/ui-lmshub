import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Help',
    loadComponent: async () => (await import('./help.page')).HelpPage,
  },
];
