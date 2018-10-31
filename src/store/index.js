import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import eventsMiddleware from '../middlewares';

export default function configureStore(data) {
  const middleware = [
    eventsMiddleware,
  ];

  const store = createStore(
      reducer,
      applyMiddleware(...middleware),
  );

  return store;
}
