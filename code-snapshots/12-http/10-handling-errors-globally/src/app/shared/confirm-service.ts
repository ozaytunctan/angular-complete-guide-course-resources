import {Injectable, signal} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ConfirmService {

  private _confirmData = signal<{ title: string, message: string }>({title: '', message: ''});
  confirmData = this._confirmData.asReadonly();

  private confirmStatus = signal<boolean>(false);
  confirmed = this.confirmStatus.asReadonly()


  show(data: { title: string, message: string }) {
    this._confirmData.set({title: data.title, message: data.message});
  }

  private hide() {
    this._confirmData.set({title: '', message: ''});
  }

  onCancel() {
    this.confirmStatus.set(false);
    this.hide();
  }

  onConfirm() {
    this.confirmStatus.set(true);
    this.hide();
  }
}
