import { EventHandler } from "./event-handler";
import { EventInterface } from "./event-interface";

export class DomainEvents {
  public static shouldRun = true;

  private static eventHandlers: Record<
    string,
    EventHandler<EventInterface<unknown>>[]
  > = {};

  public static getEventHandlers(): Record<
    string,
    EventHandler<EventInterface<unknown>>[]
  > {
    return DomainEvents.eventHandlers;
  }

  public static register(
    eventName: string,
    callback: EventHandler<EventInterface<unknown>>,
  ) {
    const wasEventRegisteredBefore = eventName in DomainEvents.eventHandlers;

    if (!wasEventRegisteredBefore) {
      DomainEvents.eventHandlers[eventName] = [];
    }

    DomainEvents.eventHandlers[eventName].push(callback);
  }

  public static notify(event: EventInterface<unknown>) {
    const eventName: string = event.constructor.name;

    const isEventRegistered = eventName in DomainEvents.eventHandlers;

    if (!DomainEvents.shouldRun) {
      return;
    }

    if (!isEventRegistered) {
      throw new Error("Event was not registered before");
    }

    const handlers = DomainEvents.eventHandlers[eventName];

    for (const handler of handlers) {
      handler.handler(event);
    }
  }

  public static clearHandlers() {
    DomainEvents.eventHandlers = {};
  }
}
