import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { attachList, changeList} from '../actions'


let ListSelector = ({id, onChangeListType, onBlurListType, list_types, attached, selected}) => (
    <div style={{display: 'inline-block'}}>
        <select name={id} value={selected || 'none'}
                style={{
                    display: attached ? 'inline-block' : 'none'
                }}
                onChange={onChangeListType}
                onBlur={() => onBlurListType({id})}
        >
            <option key="none" value="none">None</option>
            {list_types.map(list_type =>
                <option key={list_type.id} value={list_type.text}>{list_type.text}</option>
            )}
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeListType: (event) => {
            dispatch(changeList(event.target.value, +event.target.name));
        },
        onBlurListType: (value) => {
            dispatch(attachList(value.id));
        }
    }
};

ListSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListSelector);

export default ListSelector;