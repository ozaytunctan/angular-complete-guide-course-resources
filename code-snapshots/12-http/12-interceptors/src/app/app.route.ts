import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes} from "@angular/router";
import {PlacesComponent} from "./places/places.component";
import {NotFoundPageComponent} from "./shared/not-found-page/not-found-page.component";
import {ErrorHandler, inject} from "@angular/core";
import {HomeComponent} from "./home/home.component";

const resolvedChildATitle: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Promise.resolve('Available Places');

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: resolvedChildATitle,
    // title: 'Places'
  },
  {
    path: 'user-places/:userId',
    loadComponent: () => import('./places/user-places/user-places.component').then(m => m.UserPlacesComponent),
    title: 'User Places',
  },
  {
    path: "user-places",
    redirectTo: ({queryParams}) => {
      const errorHandler = inject(ErrorHandler);
      const userIdParam = queryParams['userId'];
      if (userIdParam !== undefined) {
        return `/user-places/${userIdParam}`;
      } else {
        errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
        return `/not-found`;
      }
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }

]
