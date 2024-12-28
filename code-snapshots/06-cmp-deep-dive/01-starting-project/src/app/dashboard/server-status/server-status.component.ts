import {Component, OnInit} from '@angular/core';
import {DashboardItemComponent} from "../dashboard-item/dashboard-item.component";

type ServerStatus = 'offline' | 'online' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: ServerStatus = "online";

  private intervalRef: any;
  constructor() {
  }

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      const rnd = Math.random();//0-0.99999999
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000)
  }

  ngOnDestroy() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }


}
