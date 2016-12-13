import { combineReducers } from 'redux'
import todos from './todos'
import list_types from './list_types'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    list_types,
    visibilityFilter
});

export default todoApp;