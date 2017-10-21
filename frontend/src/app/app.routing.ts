import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './components/login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: './components/user-dashboard/user-dashboard.module#UserDashboardModule'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


