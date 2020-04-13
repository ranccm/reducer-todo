import React from 'react';

const Todo = props => {
    return (
        <div
        onClick={()=> { props.toggleItem(props.item.id) }}
        className={`items${props.item.complete ? ' complete' : ''}`}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo