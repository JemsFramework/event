import { Event } from './event';

/**
 * Represents a factory that allows create events
 */
export interface EventFactory {
    /**
     * Creates an event with the provided handler signature
     */
    createEvent<Handler extends (...args) => void>() : Event<Handler>
}