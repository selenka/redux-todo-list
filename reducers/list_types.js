
const list_types = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST_TYPE':
            return [
                ...state,
                action
            ];
        default:
            return state
    }
};

export default list_types