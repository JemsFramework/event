/**
 * Represents an event emitter which allows events subscription and handling
 */
export interface EventEmitter<Handler extends (...args) => void> {
  /**
   * Subscribe the povided handler for the event
   * @param hanlder Represents the event handler to be subscribed
   */
  subscribe(hanlder: Handler)

  /**
   * Unsubscribe the povided handler for the event
   * @param hanlder Represents the event handler to be unsubscribed
   */
  unsubscribe(hanlder: Handler)
}
