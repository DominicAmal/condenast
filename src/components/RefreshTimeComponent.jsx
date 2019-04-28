import React from 'react';

const RefreshTimeComponent = (props) => {
    return (
        <div>
            <h3>UPDATED</h3>
            <h3>{props.refreshTime}</h3>
        </div>
    );
};

export default RefreshTimeComponent;