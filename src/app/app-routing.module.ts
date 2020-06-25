import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { RegisterComponent } from './register/register.component';
import { UserResolverService } from './services/user-resolver/user-resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
    resolve: { user: UserResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
