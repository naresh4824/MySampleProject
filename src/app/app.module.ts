import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { TokenInterceptor } from './interceptors/token/token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TelephoneComponentComponent } from './components/common/telephone-component/telephone-component.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SocialMediaLoginComponent } from './components/common/social-media-login/social-media-login.component';
import { ChowktiLogoComponent } from './components/common/chowkti-logo/chowkti-logo.component';
import { OtpVerificationComponent } from './components/sign-up/otp-verification/otp-verification.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfileSetUpComponent } from './components/profile-set-up/profile-set-up.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploadComponent } from './components/common/file-upload/file-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    DefaultComponent,
    WelcomeComponent,
    SignInComponent,
    TelephoneComponentComponent,
    SignUpComponent,
    SocialMediaLoginComponent,
    ChowktiLogoComponent,
    OtpVerificationComponent,
    ProfileSetUpComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgOtpInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    ShowHidePasswordModule,
    ImageCropperModule,
    FileUploadModule,
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
