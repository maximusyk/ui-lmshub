import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appEffects } from '@shared/data-access/state/app.effects';
import { appReducers } from '@shared/data-access/state/app.reducers';
import { AngularToastifyModule } from 'angular-toastify';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { JwtInterceptor, ServerErrorInterceptor } from './app/shared/data-access/interceptors';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      HttpClientModule,
      AngularToastifyModule,
      NgxMaskModule.forRoot(maskConfigFunction),
      StoreModule.forRoot(appReducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
        autoPause: true,
      }),
      EffectsModule.forRoot(appEffects),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
}).catch((error) => console.error(error));
