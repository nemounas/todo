import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import ToDoList from '../ToDoList/ToDoList'
import './App.css'

export default class App extends Component {

    state = {
        ToDoDate: [
            { label: 'Drink coffe', important: false, id: 1 },
            { label: 'Build React App', important: true, id: 2 },
            { label: 'Play the game', important: false, id: 3 },
            { label: 'Go bed', important: false, id: 4 },
        ]
    }

    DeleteItem = ((id) => {
        this.setState(({ ToDoDate }) => {
            const idx = ToDoDate.findIndex((el) => el.id === id);
            const before = ToDoDate.slice(0,idx)
            const after = ToDoDate.slice(idx+1)
            const newArray = [...before, ...after]
            return {
                ToDoDate: newArray
            }
        })
    })

    render() {

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel />
                <ToDoList
                    todos={this.state.ToDoDate}
                    onDeleted={this.DeleteItem}
                />
            </div>
        )
    }

}




