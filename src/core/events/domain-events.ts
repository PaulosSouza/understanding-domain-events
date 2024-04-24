import { IDomainEvent } from "./domain-event";

type DomainEventCallback<T> = (event: IDomainEvent<T>) => void;

export class DomainEvents {
  private static eventHandlers: Record<string, DomainEventCallback<any>[]>;

  get getEventHandlers(): Record<string, DomainEventCallback<any>[]> {
    return DomainEvents.eventHandlers;
  }

  public static register<T>(
    eventName: string,
    callback: DomainEventCallback<T>
  ) {
    const wasEventRegisteredBefore = eventName in DomainEvents.eventHandlers;

    if (!wasEventRegisteredBefore) {
      DomainEvents.eventHandlers[eventName] = [];
    }

    DomainEvents.eventHandlers[eventName].push(callback);
  }

  public static notify<T>(event: IDomainEvent<T>) {
    const eventName: string = event.constructor.name;

    const isEventRegistered = eventName in DomainEvents.eventHandlers;

    if (!isEventRegistered) {
      throw new Error("Event was not registered before");
    }

    const handlers = DomainEvents.eventHandlers[eventName];

    for (const handler of handlers) {
      handler(event);
    }
  }

  public static clearHandlers() {
    DomainEvents.eventHandlers = {};
  }
}
