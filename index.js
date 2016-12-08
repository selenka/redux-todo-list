import React from 'react';
import ReactDOM from 'react-dom';

const Test = React.createClass({

    render: function () {

        return (
            <div>Launch!</div>
        );
    }
});


ReactDOM.render(
    <Test />,
    document.getElementById('wrapper')
);