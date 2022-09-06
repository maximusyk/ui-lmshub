import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Chat',
    loadComponent: async () => (await import('./chat.page')).ChatPage,
  },
];
