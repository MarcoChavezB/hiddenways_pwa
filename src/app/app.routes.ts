import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
        {
            path: '',
            loadComponent: () => import('./Views/principal-view/principal-view.component').then(m => m.PrincipalViewComponent)
        },
        {
            path: 'perfil',
            loadComponent: () => import('./Views/profile-view/profile-view.component').then(m => m.ProfileViewComponent)
        }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
