export function bindActions(actions, store) {
    actions = typeof actions === "function" ? actions(store) : actions
    let bound = {}
    for (let name in actions) {
      bound[name] = (...args) => {
        let ret = actions[name](store.getState(), ...args)
        if (ret != null) store.setState(ret)
      }
    }
    return bound
  }