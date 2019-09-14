import { Event } from '../main/event';

export class AuthenticationEvent extends Event {}

export class ShowLoginFormEvent extends AuthenticationEvent {
  constructor(public readonly isOpen: boolean) {
    super(isOpen);
  }
}
