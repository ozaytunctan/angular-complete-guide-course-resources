import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {ApplicationConfig} from "@angular/core";
import {TaskService} from "./app/tasks/task.service";

/*const APP_CONFIG: ApplicationConfig = {
  providers: [TaskService]
}
bootstrapApplication(AppComponent, APP_CONFIG)
  .catch((err) => console.error(err));*/

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
