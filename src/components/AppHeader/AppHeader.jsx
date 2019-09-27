import React from 'react'
import './AppHeader.css'
import  Progress from '../Progress/Progress'

const AppHeader = () => {
    return (
        <div className="AppHeader">
            <div>
            <h1>ToDo List</h1>
            </div>
            <div>
            <Progress />
            </div>
            </div>
       
    )
}

export default AppHeader;