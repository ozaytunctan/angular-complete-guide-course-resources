import {Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation} from '@angular/core';

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
    '(click)': 'onClickInput()'
  }

})
export class ControlComponent {

  label = input.required<string>();

  // @HostBinding("class") className = "form-control";

  // @HostListener("click")onClickInput(): void {
  // console.log("form control clicked..");
  // }

  private el = inject(ElementRef);

  onClickInput() {
    //programatically host binding and listener
    // console.log(this.el.nativeElement);
    // this.el.nativeElement.classList.add('form-control');
    // this.el.nativeElement.addEventListener('click', this.onClickInput);
    // this.el.nativeElement.style.color = 'red';
  }

}
