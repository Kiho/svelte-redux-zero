import createStore from 'redux-zero';
import { connect } from 'redux-zero/svelte';
import { bindActions } from "./bindActions";

const initialState = { 
  counter: 0
};

const store = createStore(initialState);
const context: any = store;

const init = (component, options) => {
  options.data = options.data || {};
  component.connect = (mapToProps, mapActions) => {
    if (mapActions) {
      const actions = bindActions(mapActions, store);
      const methods = {};
      Object.keys(actions).forEach(x => {
        if (component[x]) methods[x] = actions[x];
      });
      Object.assign(component, methods);
    }
    connect(component, store, mapToProps);
  }
  Object.assign(options.data, store.getState());
}

context.init = init;

export default store;
