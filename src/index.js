import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const pitcherList = (state = [], action) => {
  console.log('pitcher reducer')
    if (action.type === 'ADD_PITCHER') {
      console.log(`New Pitcher : ${action.payload}`)
      return [...state, action.payload]
    }
    return state
  }

const catcherList = (state = [], action) => {
  console.log('catcher reducer')
    if (action.type === 'ADD_CATCHER') {
      console.log(`New Pitcher : ${action.payload}`)
      return [...state, action.payload]
    }
  return state
}

const storeInstance = createStore(
  combineReducers({
    pitcherList,
    catcherList,
  }),
  applyMiddleware( logger )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
          <App />
        </Provider>
    </React.StrictMode>
);
