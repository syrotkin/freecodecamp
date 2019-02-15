// counter: (smaller than) minimal example

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INITIAL_STATE = 0;

//counter reducer increments or decrements the state based on the action it receives
const counterReducer = (state = INITIAL_STATE, action) => {
  console.log('state in reducer: ' + state);
  console.log(action.type);
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}; 

// action creator for incrementing
const incAction = () => {
  return { type: INCREMENT };
}; 

// action creator for decrementing
const decAction = () => {
    return { type: DECREMENT };
}; 

// Redux store accepts a reducer
const store = Redux.createStore(counterReducer); 

// listener is called on every dispatch call, and it runs after the reducer has run
store.subscribe(() => {
  console.log('in listener');
  console.log(store.getState());
});

// the application is running now:
store.dispatch(incAction());
store.dispatch(incAction());
store.dispatch(decAction());