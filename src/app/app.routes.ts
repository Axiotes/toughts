import { RouterModule, Routes } from '@angular/router';
import { ToughtsComponent } from './pages/toughts/toughts.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'toughts', component: ToughtsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/toughts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
