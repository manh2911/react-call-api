import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {applyMiddleware, createStore, compose} from "redux";
import appReducers from "./reducers";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
