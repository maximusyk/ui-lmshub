import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Courses',
    loadComponent: async () => (await import('./course-list/course-list.page')).CourseListPage,
  },
  {
    path: ':courseId',
    title: 'Course Details',
    loadComponent: async () => (await import('./course-details/course-details.page')).CourseDetailsPage,
  }
];
