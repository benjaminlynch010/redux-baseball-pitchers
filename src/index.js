import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const pitcherList = (state = ['Pitch Pitchman', '"Throwy"'], action) => {
    if (action.type === 'ADD_PITCHER') {
      console.log(`New Pitcher : ${action.payload}`)
      return [...state, action.payload]
    }
    return state
  }

const catcherList = (state = ["Catch 'Catchy' Catcherson",  "John Baseball"], action) => {
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
