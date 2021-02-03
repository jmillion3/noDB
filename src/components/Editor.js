import React from 'react';

const Editor = props => {
    const {id, name, day, hours} = props.child
    return <div className="editor">
        <div>{name}</div>
        <div>{day}</div>
        <div className="hoursBox">
            <div className={hours < 0 || hours > 24 ? "badData" : "goodData"}>{hours}</div>
            <div className="buttons">
                <button className="addBtn" onClick={() => props.addHours(hours, id)}> + </button>
                <button className="subBtn" onClick={() => props.subHours(hours, id)}> - </button>
            </div>
        </div>
        <div className="delete">
            <button onClick={() => props.deleteChild(id)}>Delete</button>
        </div>
    </div>
}

export default Editor;