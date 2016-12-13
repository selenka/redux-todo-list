import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import ListOfTypesCmp from '../components/ListOfTypesCmp'


const mapStateToProps = (state) => {
    return {
        list_types: state.list_types
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id));
        }

    }
};

const ListOfTypes = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfTypesCmp);

export default ListOfTypes