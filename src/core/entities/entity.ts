import { randomUUID } from "node:crypto";

export abstract class Entity<T> {
  protected props: T;
  private readonly _id: string;

  get id() {
    return this._id;
  }

  protected constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  equals(entity: Entity<unknown>) {
    if (entity === this) {
      return true;
    }

    if (entity.id === this._id) {
      return true;
    }

    return false;
  }
}
