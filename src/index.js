import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer);

ReactDOM.render(<Provider store={store}> {' '}<App /></Provider>, document.getElementById('root'));
