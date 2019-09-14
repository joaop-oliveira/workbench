import { Event } from './event';

interface IBloc<T extends Event> {}

export class Bloc<T extends Event> implements IBloc<Event> {
  public dispatch(event: T) {
    //@ts-ignore
    this.mapEventToState(event);
  }
}
