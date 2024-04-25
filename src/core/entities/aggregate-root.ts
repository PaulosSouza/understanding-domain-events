import { DomainEvent } from "../events/domain-event";

import { Entity } from "./entity";

export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: DomainEvent<unknown>[] = [];

  get domainEvents(): DomainEvent<unknown>[] {
    return this._domainEvents;
  }

  public clearEvents() {
    this._domainEvents = [];
  }

  protected addDomainEvent(domainEvent: DomainEvent<unknown>): void {
    this._domainEvents.push(domainEvent);
  }
}
