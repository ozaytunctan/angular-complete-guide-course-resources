import {Component, inject, input} from '@angular/core';
import {ModalComponent} from "../modal.component";
import {ConfirmService} from "../../confirm-service";

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {

  title = input<string>();
  message = input<string>();

  confirmService = inject(ConfirmService);

  onCancel() {
    this.confirmService.onCancel();
  }

  onConfirm() {
    this.confirmService.onConfirm();
  }
}
