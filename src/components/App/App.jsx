import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import ToDoList from '../ToDoList/ToDoList'
import './App.css'

const ToDoDate = [
    {label:'Drink coffe', important:false, id:1},
    {label:'Build React App', important:true, id:2},
    {label:'Play the game', important:false, id:3},
    {label:'Go bed', important:false, id:4},
]

const App = () => {
    return (
    <div className="app">
        <AppHeader />
        <SearchPanel />
        <ToDoList todos={ToDoDate}/>
    </div>
    )
}

export default App;