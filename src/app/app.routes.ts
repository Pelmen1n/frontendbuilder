import { Routes } from '@angular/router';
import { AuthPage } from './pages/auth/auth';
import { DashboardPage } from './pages/dashboard/dashboard';
import { UploadPage } from './pages/upload/upload';   // upload page

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthPage },
  { path: 'dashboard', component: DashboardPage },
  { path: 'upload', component: UploadPage },
  { path: '**', redirectTo: 'auth' },
];
