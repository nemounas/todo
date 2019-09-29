import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import ToDoList from '../ToDoList/ToDoList'
import AddToDo from '../AddToDo'
import './App.css'

export default class App extends Component {

    maxid = 100;

    state = {
        ToDoDate: [
            this.CreateToDo('Drink coffe'),
            this.CreateToDo('Build React App'),
            this.CreateToDo('Play the game'),
            this.CreateToDo('Go bed')
        ]
    }

    CreateToDo(label) {

        let arr = {
            label: label,
            id: this.maxid++,
            important: false,
            done: false
        }
        return arr
    }

    DeleteItem = ((id) => {
         this.setState(({ ToDoDate }) => {
            const idx = ToDoDate.findIndex((el) => el.id === id);
            const before = ToDoDate.slice(0, idx)
            const after = ToDoDate.slice(idx + 1)
            const newArray = [...before, ...after]
            return {
                ToDoDate: newArray
            }
        }) 
    })

    addItem = (text) => {

        const addItem = this.CreateToDo(text)
        this.setState(({ ToDoDate }) => {
           
           return {
                ToDoDate: [...ToDoDate, addItem]
            } 
        })
    }

    onDone = (id) => {
       
         this.setState(({ ToDoDate }) => {

            const idx = ToDoDate.findIndex((el) => el.id === id);

            let olditem = ToDoDate[idx]
            let newitem = { ...olditem, done: !olditem.done }

            const before = ToDoDate.slice(0, idx)
            const after = ToDoDate.slice(idx + 1)
            const newArray = [ ...before, newitem, ...after ]

            return {
                ToDoDate: newArray
            }
        }); 
    };

    onImportant = (id) => {

         this.setState(({ ToDoDate }) => {

            const idx = ToDoDate.findIndex((el) => el.id === id);

            let olditem = ToDoDate[idx]
            let newitem = { ...olditem, important: !olditem.important }

            const before = ToDoDate.slice(0, idx)
            const after = ToDoDate.slice(idx + 1)
            const newArray = [ ...before, newitem, ...after ]

            return {
                ToDoDate: newArray
            }
        }); 
    }


    render() {

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel />
                <ToDoList
                    todos={this.state.ToDoDate}
                    onDeleted={this.DeleteItem}
                    onImportant={this.onImportant}
                    onDone={this.onDone}
                />
                <AddToDo onAdd={this.addItem} />
            </div>
        )
    }

}




