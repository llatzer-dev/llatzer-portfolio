import { Routes } from '@angular/router';

const AppRoutes = {
  CAREER: 'career',
  ABOUTME: 'about-me',
  BLOGS: 'blog',
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@app/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: AppRoutes.CAREER,
    loadComponent: () =>
      import('@app/pages/career/career.component').then(
        (m) => m.CareerComponent
      ),
  },
  {
    path: AppRoutes.ABOUTME,
    loadComponent: () =>
      import('@app/pages/about-me/about-me.component').then(
        (m) => m.AboutMeComponent
      ),
  },
];
