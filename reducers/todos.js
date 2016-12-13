const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false,
                attached: false,
                list_type: 'none'
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        case 'ATTACH_LIST':
            return Object.assign({}, state, {
                attached: !state.attached
            });

        case 'CHANGE_LIST':
            return Object.assign({}, state, {
                list_type: action.text
            });
        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );

        case 'DELETE_TODO':
            return state.filter((todo) => {
                return todo.id != action.id;


            });

        case 'ATTACH_LIST':
            return state.map(t =>
                todo(t, action)
            );

        case 'CHANGE_LIST':
            return state.map(t =>
                todo(t, action)
            );

        default:
            return state
    }
};

export default todos