import {Route} from "@angular/router";
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent
  }
]
