import {Component} from '@angular/core';

@Component({
  selector: 'card-header',
  standalone: true,
  imports: [],
  template: `
    <ng-content/>
  `,
  styles: `
      :host {
        padding: 0.2rem 1rem;
        background: green;
      }
  `
})
export class CardHeaderComponent {

}
