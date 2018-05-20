/**
 * Represents a dispatcher that offers an encapsulated way of event dispatching
 */
export interface EventDispather<Handler extends (...args) => void> {
    /**
     * Dispatch the event using the provided handler signature
     */
    dispatch: Handler
}