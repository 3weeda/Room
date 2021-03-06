import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage'
import './index.css';
import App from './App';
import Spinner from './UI/Spinner/Spinner';
import nightMode from './store/reducers/nightMode';
import auth from './store/reducers/auth';
import room from './store/reducers/room';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    nightMode: nightMode,
    auth: auth,
    room: room
})
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['room']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

const app = (
    <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
