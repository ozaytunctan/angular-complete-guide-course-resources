export interface EventObserver<T> {
  next: (val: T) => void;
  error: (err: any) => void;
  complete?: () => void;
}

export class EventPublisher<T> implements EventObserver<T> {
  private observers: Set<EventObserver<T>> = new Set();
  constructor(event?: EventObserver<T>) {
    if (event) {
      this.observers.add(event);
    }
  }

  next(val: T): void {
    for (let observer of this.observers) {
      observer.next(val);
    }
  }

  error(err: any): void {
    for (let observer of this.observers) {
      observer.error(err);
    }
  }

  subscribe(observer: EventObserver<T>): EventSubscription<T> {
    this.observers.add(observer);
    return new EventSubscription<T>(this.observers, observer);
  }
}

export class EventSubscription<T> {
  private observers: Set<EventObserver<T>>;
  private readonly source: EventObserver<T>;

  constructor(observers: Set<EventObserver<T>>, source: EventObserver<T>) {
    this.observers = observers;
    this.source = source;
  }

  unsubscribe() {
    // Observer'ı Set'ten kaldırıyoruz
    this.observers.delete(this.source);
  }
}
