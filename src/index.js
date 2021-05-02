import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  getFirebase,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase';
import fire from './fire';
import { createFirestoreInstance } from 'redux-firestore';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);
const rrfProps = {
  fire,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
