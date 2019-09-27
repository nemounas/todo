import React from 'react'
import './TrashAndImportant.css'
import trash from '../../img/trash.png'
import important from '../../img/important.png'

const TrashAndImportant = () => {

    return (
        <div>
            <button><img src={trash} alt="trash" /></button>
            <button><img src={important} alt="important" /></button>
        </div>
    )

}

export default TrashAndImportant;