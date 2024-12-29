import {Component, input, output, signal} from '@angular/core';

import {Ticket} from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output<string>();
  open = output<string>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }


  onMarkAsCompleted() {
    this.close.emit(this.data().id);
  }

  onMarkAsOpen() {
    this.open.emit(this.data().id);
  }
}
