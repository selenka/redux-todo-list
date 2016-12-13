import React from 'react'
import { connect } from 'react-redux'
import { addListType } from '../actions'

let AddListType = React.createClass ({
    render: function () {
        let input;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                      return
                    }
                    this.props.onAddListType(input.value);
                    input.value = '';
                    }}>
                    <input ref={node => {
                      input = node
                    }} />
                    <button type="submit">
                        Add List type
                    </button>
                </form>
            </div>
        )

    }
});

AddListType = connect(
    function(store) {
        return store;
    },
    function(dispatch) {
        return {
            onAddListType: function(value) {
                dispatch(addListType(value));
            }
        };
    }
)(AddListType);
export default AddListType
