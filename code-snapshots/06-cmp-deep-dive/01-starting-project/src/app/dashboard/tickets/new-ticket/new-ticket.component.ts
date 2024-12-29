import {Component, ElementRef, model, signal, ViewChild, viewChild, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    ControlComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // @ViewChild('form', {static: true}) private form!: ElementRef<HTMLFormElement>;
  private form =
    viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredName = signal<string>('');
  enteredRequest = signal<string>('');

  onSubmit(form: HTMLFormElement) {
    console.log(this.enteredRequest());
    // form.reset();
    this.form().nativeElement.reset();
    console.log(this.enteredRequest());

  }
}
