import { EventHandler } from "./event-handler";
import { DomainEvents } from "./domain-events";
import { EventInterface } from "./event-interface";

class CustomEvent implements EventInterface<Record<string, never>> {
  public occuredAt: Date;
  public eventData: Record<string, never>;

  constructor() {
    this.occuredAt = new Date();
    this.eventData = {};
  }
}

class CustomEventHandler implements EventHandler<CustomEvent> {
  constructor() {
    DomainEvents.register(CustomEvent.name, this);
  }

  handler(event: CustomEvent) {}
}

describe("Domain Events", () => {
  it("should be able to register and notify an event", () => {
    const customEventHandler = new CustomEventHandler();
    const customEventHandlerSpy = vi.spyOn(customEventHandler, "handler");

    const customEvent = new CustomEvent();

    DomainEvents.notify(customEvent);

    expect(customEventHandlerSpy).toHaveBeenCalledOnce();
  });
});
