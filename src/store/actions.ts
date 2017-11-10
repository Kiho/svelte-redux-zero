export const actions = store => ({
  increment: state => ({ counter: state.counter + 1 }),
  decrement: state => ({ counter: state.counter - 1 })
});
