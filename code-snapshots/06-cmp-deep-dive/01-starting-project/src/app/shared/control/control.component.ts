import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'form-control',
  standalone: true,
  imports: [],
  template: `
    <label>{{ label() }}</label>
    <ng-content select="input,textarea"/>
  `,
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,//Component scope bunda değil global css olarak verir.
  // encapsulation: ViewEncapsulation.Emulated Shadow dom kapsamındadır.
  host: {
    class: 'form-control',//Host selector e form-control class default olarak ekler.

  }

})
export class ControlComponent {

  label = input.required<string>();

}
