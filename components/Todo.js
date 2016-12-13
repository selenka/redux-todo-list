import React, { PropTypes } from 'react'
import ListSelector from './ListSelector'

const Todo = ({ onClick, onDeleteClick, completed, text , attached, list_type}) => (
    <li>
        <span onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </span>
        <span className="selected-list">{list_type == 'none' ? '' : list_type}</span>
        <button type="button" className="delete" onClick={onDeleteClick}>Delete</button>
        <ListSelector attached={attached} selected={list_type}/>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;