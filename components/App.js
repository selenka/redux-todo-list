import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddListType from '../containers/AddListType'
import VisibleTodoList from '../containers/VisibleTodoList'
import ListOfTypes from '../containers/ListOfTypes'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <AddListType />
        <ListOfTypes />
    </div>
)

export default App