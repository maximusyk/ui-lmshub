import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Exams',
    loadComponent: async () => (await import('./exams.page')).ExamsPage,
  },
];
