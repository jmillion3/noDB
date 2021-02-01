import React from 'react';

const Editor = props => {
    return <div className="editor">
        <div>{props.child.name}</div>
        <div>{props.child.day}</div>
        <div>{props.child.hours}</div>
        <div className="buttons">
            <button className="addBtn" onClick={() => props.updateChild(props.child.id)}> + </button>
            <button className="subBtn" onClick={() => props.updateChild(props.child.id)}> - </button>
            <button onClick={() => props.deleteChild(props.child.id)}>Delete</button>
        </div>
    </div>
}

export default Editor;