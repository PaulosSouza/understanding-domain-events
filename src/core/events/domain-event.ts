export interface DomainEvent<T> {
  occuredAt: Date;
  eventData: T;
}
