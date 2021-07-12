import React from 'react';

const person = (props) => {
    return <div>
        <p>I am {props.name} and I'm  a {props.age} years old.</p>
        <p>{props.children}</p>
    </div>
}

export default person;