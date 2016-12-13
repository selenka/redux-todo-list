import React, { PropTypes } from 'react'

const ListOfTypesCmp = ({ list_types }) => (
    <ul>
        {list_types.map(list_type =>
            <li key={list_type.id}>
                {list_type.text}
            </li>
        )}
    </ul>
)



export default ListOfTypesCmp;