import {bootstrapApplication} from '@angular/platform-browser';
import {
  HttpContextToken,
  HttpEventType,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import {AppComponent} from './app/app.component';
import {tap} from 'rxjs';
import {
  PreloadAllModules,
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig,
  withViewTransitions
} from "@angular/router";
import {appRoutes} from "./app/app.route";
import {TemplatePageTitleStrategy} from "./app/template-page-title-strategy";


const loggingHttpInterceptFn: HttpInterceptorFn = (request, next: HttpHandlerFn) => {
  const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
  let isCacheEnabled = request.context.get(IS_CACHE_ENABLED);


  let httpHeaders = new HttpHeaders();
  httpHeaders.set('Accept', 'application/json');
  httpHeaders.set('Content-Type', 'application/json');
  httpHeaders.set('Cache-Control', 'no-cache');


  const modifiedRequest = request.clone({
    // headers: request.headers.set('X-DEBUG', 'TESTING')
    headers: httpHeaders,
    // withCredentials: true
  });

  console.log('[Outgoing Request]');
  console.log(modifiedRequest);
  return next(modifiedRequest).pipe(
    tap({
      next: event => {
        if (event.type === HttpEventType.Response) {
          console.log('[Incoming Response]');
          console.log(event.status);
          console.log(event.body);
        }
      }
    })
  );
}


bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: TitleStrategy, useClass: TemplatePageTitleStrategy
    },

    provideRouter(appRoutes,
      withComponentInputBinding(),
      // withDebugTracing(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}),
      withViewTransitions(),
      withPreloading(PreloadAllModules)// Customize edilebilir.
    ),
    provideHttpClient(withInterceptors([loggingHttpInterceptFn]))
  ],
}).catch((err) => console.error(err));
