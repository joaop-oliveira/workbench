import * as React from 'react';
import { BehaviorSubject } from 'rxjs';
import { Bloc } from '../main/bloc';
import { AuthenticationEvent, ShowLoginFormEvent } from './events';

export class AuthenticationBloc extends Bloc<AuthenticationEvent> {
  openOverlaySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public useIsOpenOverlaySubscription(): boolean {
    const [value, setValue] = React.useState<boolean>(this.openOverlaySubject.getValue());
    React.useEffect(() => {
      this.openOverlaySubject.subscribe(setValue);
    });
    return value;
  }

  private mapEventToState(event: AuthenticationEvent) {
    if (event instanceof ShowLoginFormEvent) {
      this.mapShowLoginFormEventToState(event);
    }
  }
  private mapShowLoginFormEventToState(event: ShowLoginFormEvent) {
    this.openOverlaySubject.next(event.isOpen);
  }
}
