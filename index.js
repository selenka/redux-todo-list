import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import ToDoList from './components/ToDoList'
import todoApp from './reducers'

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>,
    document.getElementById('wrapper')
);