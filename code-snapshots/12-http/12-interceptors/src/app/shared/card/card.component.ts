import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template:`
    <ng-content select="card-header"/>
    <ng-content select="card-body"/>
    <ng-content select="card-footer"/>
  `,
  styles:`

    :host {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      border: 1px solid green;
      border-radius: 0.4rem;
      box-shadow: 1px 0.6rem 1rem rgba(0, 0, 0, 0.15)
    }
  `,
  host:{
    'role': 'card',

  }
})
export class CardComponent {

}
