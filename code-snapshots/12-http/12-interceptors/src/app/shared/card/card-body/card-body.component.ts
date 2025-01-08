import { Component } from '@angular/core';

@Component({
  selector: 'card-body',
  standalone: true,
  imports: [],
  template:`
    <ng-content/>
  `,
  styles:`

    :host {
      padding: 1rem;
    }

  `
})
export class CardBodyComponent {

}
