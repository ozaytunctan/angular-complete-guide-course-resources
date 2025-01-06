import {Component, effect, inject} from '@angular/core';

import {AvailablePlacesComponent} from './places/available-places/available-places.component';
import {UserPlacesComponent} from './places/user-places/user-places.component';
import {ErrorService} from './shared/error.service';
import {ErrorModalComponent} from './shared/modal/error-modal/error-modal.component';
import {ConfirmService} from "./shared/confirm-service";
import {ConfirmModalComponent} from "./shared/modal/confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AvailablePlacesComponent, UserPlacesComponent, ErrorModalComponent, ConfirmModalComponent],
})
export class AppComponent {
  private errorService = inject(ErrorService);
  error = this.errorService.error;

  private confirmService = inject(ConfirmService);
  confirmData = this.confirmService.confirmData;


  constructor() {
    effect(() => {
      console.log("Modal confirm status:" + this.confirmService.confirmed());
    })
  }

  ngOnInit() {
    let message = {title: 'Deneme', message: 'Message'};
    this.confirmService.show(message);
  }


}
