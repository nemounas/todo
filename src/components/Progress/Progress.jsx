import React from 'react'
import './Progress.css'


const Progress = ({ doneCount, toDoCount }) => {

    return (
        <div>
           {toDoCount} more to do, {doneCount} done
        </div>
    )

}

export default Progress;