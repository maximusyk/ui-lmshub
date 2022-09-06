import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Live Classroom',
    loadComponent: async () => (await import('./live-classroom.page')).LiveClassroomPage,
  },
];
