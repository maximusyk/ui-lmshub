import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from '@auth/data-access/state/auth/auth.actions';
import { IAuthResponse } from '@auth/data-access/state/auth/auth.models';
import { environment } from '@env/environment';
import { BootstrapFacebook, BootstrapGithub, BootstrapGoogle } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HeroEye, HeroEyeOff } from '@ng-icons/heroicons/outline';
import { Store } from '@ngrx/store';
import { ProductLogoComponent } from '@shared/ui/product-logo/product-logo.component';
import { AuthService } from '../../data-access/services/auth.service';
import { GoogleButtonDirective } from '../../ui/google-btn.directive';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ProductLogoComponent,
    ReactiveFormsModule,
    NgIconComponent,
    SocialLoginModule,
    GoogleButtonDirective,
    CoolSocialLoginButtonsModule,
  ],
  templateUrl: './login.page.html',
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    provideIcons({
      BootstrapFacebook,
      BootstrapGoogle,
      BootstrapGithub,
      HeroEye,
      HeroEyeOff,
    }),
    SocialAuthService,
  ],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  isPasswordVisible = false;
  actualPasswordVisibilityIcon = 'hero-eye-off';
  private _callbackURL: string;
  @ViewChild('googleBtnRef')
  googleBtn?: ElementRef;
  @ViewChild('facebookBtnRef')
  facebookBtn?: ElementRef;
  @ViewChild('githubBtnRef')
  githubBtn?: ElementRef;

  constructor(
    // private _store: Store,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _store: Store,
    private http: HttpClient,
    private _socialAuthService: SocialAuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || `/`;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this._formBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  handleSocialSignIn(type: 'google' | 'facebook' | 'github'): void {
    console.log(`Handle ${type} login`);
    if (type === 'google') {
      this.handleGoogleSignIn();
      const event = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true,
      });
      this.googleBtn?.nativeElement.dispatchEvent(event);
      return;
    }
    if (type === 'facebook') {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true,
      });
      this.facebookBtn?.nativeElement.dispatchEvent(event);
      return;
    }
    const event = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true,
    });
    this.githubBtn?.nativeElement.dispatchEvent(event);
    return;
  }

  handleLocalSignIn(): void {
    if (this.form.invalid) {
      alert('Form is invalid');
      return;
    }
    const loginData = this.form.value;
    // this._store.dispatch(loginAction(loginData));
    if (loginData.email && loginData.password) {
      this._store.dispatch(login({ loginData }));
    }
  }

  handleGoogleSignIn(): void {
    console.log('Google login handled');
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((socialResponse) => {
      this.http
        .post<IAuthResponse>(environment.apiUrl + '/auth/google', {
          token: socialResponse.authToken,
        })
        .subscribe((response) => {
          if (response && response.accessToken) {
            this._router.navigate([this._callbackURL]);
          }
        });
    });
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.actualPasswordVisibilityIcon = this.isPasswordVisible ? 'hero-eye' : 'hero-eye-off';
  }
}
