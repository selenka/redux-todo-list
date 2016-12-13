import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { attachList, changeList} from '../actions'


let ListSelector = ({onAttachListClick, onChangeListType, onBlurListType, list_types, attached, selected}) => (
    <div style={{display: 'inline-block'}}>
        <button type="button"
                className="attach"
                onClick={onAttachListClick}
                style={{
                    display: attached ? 'none' : 'inline-block'
                }}
        >Attach</button>
        <select value={selected || 'none'}
                style={{
                    display: attached ? 'inline-block' : 'none'
                }}
                onChange={onChangeListType}
                onBlur={onBlurListType}
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
        onAttachListClick: (id) => {
            dispatch(attachList(id));
        },
        onChangeListType: (event) => {
            dispatch(changeList(event.target.value));
        },
        onBlurListType: (id) => {
            dispatch(attachList(id));
        }
    }
};

ListSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListSelector);

export default ListSelector;