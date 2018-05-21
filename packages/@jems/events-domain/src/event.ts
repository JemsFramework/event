import { EventDispather } from './event-dispatcher';
import { EventEmitter } from './event-emitter';

/**
 *Represents an event that can be discreetly dispatched and handled
 */
export interface Event<Handler extends (...args) => void> {
  /**
   * Represents the event dispatcher, used to dispatch the event
   */
  dispatcher: EventDispather<Handler>

  /**
   * Represents an emitter where handlers are subscribed and then executed
   * when the event is dispatched
   */
  emitter: EventEmitter<Handler>
}
