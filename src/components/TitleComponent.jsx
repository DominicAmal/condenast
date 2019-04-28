import React from 'react';

const TitleComponent = (props) => {
    return (
        <div>
            <h1> {props.name} </h1>
            <h3> {props.title}</h3>
        </div>
    );
};

export default TitleComponent;