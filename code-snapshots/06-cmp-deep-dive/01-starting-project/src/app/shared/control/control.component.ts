import {
  Component, contentChild, ContentChild,
  ElementRef, inject, input, viewChild, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'form-control',
  standalone: true,
  imports: [],
  template: `
    <label>{{ label() }}</label>
    <ng-content select="input, textarea"/>
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

  // @HostBinding("class") className = "form-control";

  // @HostListener("click")onClickInput(): void {
  // console.log("form control clicked..");
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild(ControlComponent) private control?: ElementRef<HTMLInputElement>;
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClickInput() {
    console.log(this.control())
    //programatically host binding and listener
    // console.log(this.el.nativeElement);
    // this.el.nativeElement.classList.add('form-control');
    // this.el.nativeElement.addEventListener('click', this.onClickInput);
    // this.el.nativeElement.style.color = 'red';
  }

}
