class Listener {
  constructor(notifier, key, onNavEnter, onNavExit) {
    this.notifier = notifier;
    this.key = key;
    this.onNavEnter = onNavEnter;
    this.onNavExit = onNavExit;
  }

  off() {
    this.notifier.removeListener(this);
  }
}

class Notifier {
  constructor() {
    this.listeners = new Set();
  }

  removeListener(listener) {
    this.listeners.delete(listener);
  }

  onNavigationStateChange(prevState, currState) {
    const prevKey = prevState.routes[prevState.index].key;
    const currKey = currState.routes[currState.index].key;

    // Handle all exit events...
    this.listeners.forEach(listener => {
      if (listener.key === prevKey) {
        listener.onNavExit();
      }
    });

    // ...then all enter events
    this.listeners.forEach(listener => {
      if (listener.key === currKey) {
        listener.onNavEnter();
      }
    });
  }

  newListener(screen, onNavEnter, onNavExit) {
    const listener = new Listener(
      this,
      screen.props.navigation.state.routeName,
      onNavEnter,
      onNavExit
    );
    this.listeners.add(listener);
    return listener;
  }
}

export default new Notifier();
