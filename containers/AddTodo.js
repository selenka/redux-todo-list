import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = React.createClass ({
    render: function () {
        let input;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                      return
                    }
                    this.props.onAddTodo(input.value);
                    input.value = '';
                    }}>
                    <input ref={node => {
                      input = node
                    }} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )

    }
});

AddTodo = connect(
    function(store) {
        // здесь тебе придет весь стор и ты возвращаешь из всего стора то, что тебе нужно в твоем компоненте. или может весь стор вернуть для начала
        return store;
    },
    function(dispatch) {
        // сюда тебе приходит ф-ция диспатч
        // и ты возвращаешь объект, который содержит методы-обертки для вызова диспатча
        // все эти методы будут переданы в props в сам компонент
        // для примера я тут пишу обертку для эд туду
        return {
            onAddTodo: function(value) {
                dispatch(addTodo(value));
            }
        };
        // после этого когда ты хочешь задиспатчить событие добавления туду
        // ты у себя в компоненте вызываешь this.props.onAddTodo()
    }
)(AddTodo);
export default AddTodo
