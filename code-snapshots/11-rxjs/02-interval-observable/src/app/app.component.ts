import {Component, DestroyRef, inject, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {EventPublisher} from './event-operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);


  counter$ = new Observable(observer => {
    // next value
    observer.next('');

    // error value
    // observer.error(new Error());

    //destroy ref
    return () => {
      debugger
      observer.complete();
    }
  });


  ngOnInit(): void {

    let eventPublisher = new EventPublisher<number>();

    let subscription1 = eventPublisher.subscribe({
      next: (val) => console.log("Subscription1:" + val),
      error: (err) => console.log(err)
    });

    eventPublisher.next(1);

    let subscription2 = eventPublisher.subscribe({
      next: (val) => console.log("Subscription2:" + val),
      error: (err) => console.log(err)
    });

    eventPublisher.next(2);

    subscription1.unsubscribe();

    eventPublisher.next(3);

    // const subscription = interval(1000).subscribe({
    //   next: (val) => console.log(val)
    // });
    //
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
  }
}



