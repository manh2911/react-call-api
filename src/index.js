import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import appReducers from "./reducers";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(
    appReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
