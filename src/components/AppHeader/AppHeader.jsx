import React from 'react'
import './AppHeader.css'
import  Progress from '../Progress/Progress'

const AppHeader = ({ doneCount, toDoCount }) => {
    return (
        <div className="AppHeader">
            <div>
            <h1>ToDo List</h1>
            </div>
            <div>
            <Progress doneCount={doneCount}
                      toDoCount={toDoCount}/>
            </div>
            </div>
       
    )
}

export default AppHeader;