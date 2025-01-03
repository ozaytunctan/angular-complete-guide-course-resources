import {bootstrapApplication} from '@angular/platform-browser';
import {APP_INITIALIZER, FactoryProvider, InjectionToken, isDevMode} from '@angular/core';
import {AppComponent} from './app/app.component';
import {TasksService} from './app/tasks/tasks.service';
import {Logger} from "./app/log/logger";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {ElasticLogger} from "./app/log/elastic.logger";
import {ConsoleLogger} from "./app/log/console.logger";
import {of} from "rxjs";

export const TasksServiceToken = new InjectionToken<TasksService>(
  'tasks-service-token'
);


export interface DefaultConfiguration {
  locale: { lang: string, name: string },
  wsEndpoint: string
}


const APP_INITIALIZER_PROVIDER: FactoryProvider =
  {
    provide: APP_INITIALIZER,
    useFactory: (httpClient: HttpClient) => {
       // return httpClient.get<DefaultConfiguration>("https://endpoint-address/api/config")
       //   .pipe(
       //     catchError(err =>{
       //       console.error("Konfigürasyon alınırken hata oluştu:", error);
       //       return Promise.resolve(); // Uygulamayı başlatmaya devam et
       //     } )
       //   );
      return () => of<DefaultConfiguration>(
        {
          locale: {lang: 'tr', name: 'Türkçe'},
          wsEndpoint: 'ws://websocket.api:8080',
        }
      );
    },
    deps: [HttpClient],
    multi: true
  };


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    {
      provide: TasksServiceToken, useClass: TasksService
    },
    APP_INITIALIZER_PROVIDER,
    {
      provide: Logger, useFactory: (http: HttpClient): Logger => {
        if (isDevMode()) {
          return new ConsoleLogger();
        }
        return new ElasticLogger();
      },
      deps: [HttpClient]
    },

  ],
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent).catch(
//   (err) => console.error(err)
// );
