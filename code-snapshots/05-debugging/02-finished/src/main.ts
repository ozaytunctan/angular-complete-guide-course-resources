import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    provideAnimationsAsync()
  ]
};

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));
