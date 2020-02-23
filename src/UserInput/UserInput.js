import React from 'react';

const userInput = (props) => {
    const styles = {
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '10px'
    }
    return (
        <div>
            <label>User Name: </label>
            <input style={styles} type="text" value={props.userName} onChange={props.changed} placeholder="Enter your Name" />
        </div>
    )
}

export default userInput;