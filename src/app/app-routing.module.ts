import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { AuthGuard, NoAuthGuard } from '@shared/data-access/guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: async () => (await import('@dashboard/dashboard.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: async () => (await import('@auth/auth.routes')).ROUTES,
    canLoad: [NoAuthGuard],
  },
  {
    path: 'chat',
    loadChildren: async () => (await import('@chat/chat.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'courses',
    loadChildren: async () => (await import('@courses/features/courses.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'exams',
    loadChildren: async () => (await import('@exams/exams.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'help',
    loadChildren: async () => (await import('@help/help.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'live-classroom',
    loadChildren: async () => (await import('@live-classroom/live-classroom.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: async () => (await import('@profile/features/profile.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'schedule',
    loadChildren: async () => (await import('@schedule/schedule.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'system-updates',
    loadChildren: async () => (await import('@system-updates/system-updates.routes')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: async () => (await import('@shared/feature/not-found/not-found.page')).NotFoundPage,
  },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title} - Coursuch`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
