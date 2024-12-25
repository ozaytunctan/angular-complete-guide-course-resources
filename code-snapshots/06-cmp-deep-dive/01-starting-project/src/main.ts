import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {ApplicationConfig} from "@angular/core";
import {provideRouter, withComponentInputBinding, withViewTransitions} from "@angular/router";
import {appRoutes} from "./app/app.routes";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideAnimations(),
    provideHttpClient()
  ]
};


bootstrapApplication(
  AppComponent,
  APP_CONFIG
).catch((err) => console.error(err));
