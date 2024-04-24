import { IDomainEvent } from "../events/domain-event";
import { Entity } from "./entity";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: IDomainEvent<unknown>[] = [];

  get domainEvents(): IDomainEvent<unknown>[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: IDomainEvent<unknown>): void {
    this._domainEvents.push(domainEvent);
  }

  public clearEvents() {
    this._domainEvents = [];
  }
}
