import React from 'react'
import './AddToDo.css'

const AddToDo = ({ onAdd }) => {
    
    let refTextInput = React.createRef()

    let addElement = () => {
        let text = refTextInput.current.value;
        onAdd(text);
    }

    return (
        <div>
            <input ref={refTextInput} placeholder="add here"></input>
            <button onClick={addElement}>Add ToDo</button>
        </div>
    )

}

export default AddToDo;