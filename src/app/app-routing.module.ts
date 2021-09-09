import { WelcomeComponent } from './components/welcome/welcome.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileSetUpComponent } from './components/profile-set-up/profile-set-up.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'profile',
    component: ProfileSetUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
