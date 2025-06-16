type ListenerFunction<T = any> = (data: T) => void;

export class MyActionListener {
  private listeners: Map<string, ListenerFunction[]>;

  constructor() {
    this.listeners = new Map();
  }

  registerListener<T>(action: string, listener: ListenerFunction<T>): void {
    const current = this.listeners.get(action) || [];
    current.push(listener);
    this.listeners.set(action, current);
  }

  removeListener(action: string): void {
    this.listeners.delete(action);
  }

  emit<T>(action: string, data: T): void {
    const actionListeners = this.listeners.get(action);
    if (!actionListeners) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }

    for (const listener of actionListeners) {
      listener(data);
    }
  }
}
