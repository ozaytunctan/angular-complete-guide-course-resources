import { Component } from '@angular/core';
import {AvailablePlacesComponent} from "../places/available-places/available-places.component";
import {UserPlacesComponent} from "../places/user-places/user-places.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AvailablePlacesComponent,
    UserPlacesComponent
  ],
  template: `
    <app-available-places/>

    <app-user-places/>
  `,
  styles: ``
})
export class HomeComponent {

}
