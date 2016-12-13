let nextTodoId = 0;
let nextListTypeId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const addListType= (text) => {
    return {
        type: 'ADD_LIST_TYPE',
        id: 'list' + nextListTypeId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const deleteTodo = (id) => {
    console.log(id);
    return {
        type: 'DELETE_TODO',
        id
    }
};

export const attachList = (id) => {
    return {
        type: 'ATTACH_LIST',
        id
    }
};

export const changeList = (text, id) => {
    return {
        type: 'CHANGE_LIST',
        text,
        id
    }
};