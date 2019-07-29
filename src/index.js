import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

import Routes from './routes';

const storeWithMiddleware =  applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
    <Provider store={storeWithMiddleware(rootReducer)}>
        <Routes/>
    </Provider>,document.getElementById('root'));