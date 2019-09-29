import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import ToDoList from '../ToDoList/ToDoList'
import Filter from '../Filter'
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
        ],
        term: '',
        filter: 'active' // all,active,done
    }

    CreateToDo(label) {

        let arr = {
            id: this.maxid++,
            label: label,
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
            const newArray = [...before, newitem, ...after]

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
            const newArray = [...before, newitem, ...after]

            return {
                ToDoDate: newArray
            }
        });
    }

    onChangeSearch = (term) => {
        this.setState({ term })
    }

    onChangeButton = (filter) => {
        this.setState({ filter })

    }

    search = (items, term) => {

        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });

    }

    filter = (items, filter) => {

        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => { return !item.done })
            case 'done':
                return items.filter((item) => { return item.done })
            default:
                return items
        }

    }

    render() {

        const { ToDoDate, term, filter } = this.state

        const visiable = this.filter(this.search(ToDoDate, term), filter);

        const doneCount = ToDoDate
            .filter(el => el.done === true).length

        const toDoCount = ToDoDate.length - doneCount

        return (
            <div className="app">
                <AppHeader doneCount={doneCount}
                    toDoCount={toDoCount} />
                <div className="Search">
                    <div>
                        <SearchPanel onChangeSearch={this.onChangeSearch} />
                    </div>
                    <div>
                        <Filter filter={filter} onChangeButton={this.onChangeButton} />
                    </div>
                </div>
                <ToDoList
                    todos={visiable}
                    onDeleted={this.DeleteItem}
                    onImportant={this.onImportant}
                    onDone={this.onDone}
                />
                <AddToDo onAdd={this.addItem} />
            </div>
        )
    }
}




