export interface IDomainEvent<T> {
  occuredAt: Date;
  eventData: T;
}
