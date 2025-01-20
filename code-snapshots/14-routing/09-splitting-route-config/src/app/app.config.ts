import {ApplicationConfig} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        defaultQueryParamsHandling:'preserve', // query paramları tut,
        onSameUrlNavigation:'reload',// aynı route tetiklendiğinde yenidem yükleme yap
      }),
      withInMemoryScrolling({scrollPositionRestoration: 'enabled'}),
      withViewTransitions(),
    ),
  ],
};
