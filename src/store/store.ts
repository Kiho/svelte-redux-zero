import createStore from 'redux-zero';

const initialState = { 
  counter: 0
};
const store = createStore(initialState);

export default store;
