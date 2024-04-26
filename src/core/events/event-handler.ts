export interface EventHandler<T> {
  handler(event: T): Promise<void> | void;
}
