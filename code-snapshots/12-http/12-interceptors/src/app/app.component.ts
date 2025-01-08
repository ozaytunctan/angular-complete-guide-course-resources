import {Component, inject, OnInit} from '@angular/core';

import {AvailablePlacesComponent} from './places/available-places/available-places.component';
import {UserPlacesComponent} from './places/user-places/user-places.component';
import {ErrorService} from './shared/error.service';
import {ErrorModalComponent} from './shared/modal/error-modal/error-modal.component';
import {DOCUMENT} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AvailablePlacesComponent, UserPlacesComponent, ErrorModalComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  private errorService = inject(ErrorService);
  error = this.errorService.error;
  doc = inject(DOCUMENT);

  ngOnInit() {
    let sessionId: string | null = parseCookieValue(this.doc.cookie, 'JSESSIONID');
    console.log(`User session [${sessionId}] activated`);
  }

}

export function parseCookieValue(cookieStr: string, name: string): string | null {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(';')) {
    const eqIndex = cookie.indexOf('=');
    const [cookieName, cookieValue]: string[] =
      eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
