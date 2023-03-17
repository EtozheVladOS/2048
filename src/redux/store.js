import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import initState from './initState';

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

store.subscribe(() => {
  console.log('Redux =>', store.getState());
});

export default store;
