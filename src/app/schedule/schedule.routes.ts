import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Schedule',
    loadComponent: async () => (await import('./schedule.page')).SchedulePage,
  },
];
