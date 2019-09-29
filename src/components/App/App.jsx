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
        button: 'All'
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

    Filters = (button) => {

    }

    onChangeSearch = (term) => {
        this.setState({term})
    }

    onChangeButton = (button) => {
        this.setState({button}) 
        
    }

    search = (items, term, button) => {

        if (term.length === 0 && button === 'All' ) {
            return items
        }

        if(button === 'Active'){
            return items.filter((item) => {
                return item.done === false;
            }).filter((item) => {
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
        }

        if(button === 'Done'){
            
           return items.filter((item) => {
            return item.done === true;
        }).filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        }); 
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });

    }

    render() {

        const { ToDoDate, term, button } = this.state


        const visiable = this.search(ToDoDate, term, button);

        console.log(visiable)


        const doneCount = ToDoDate
            .filter(el => el.done === true).length

        const toDoCount = ToDoDate.length - doneCount

        return (
            <div className="app">
                <AppHeader doneCount={doneCount}
                    toDoCount={toDoCount} />
                <div className="Search">
                    <SearchPanel onChangeSearch={this.onChangeSearch} />

                    <Filter onChangeButton={this.onChangeButton} />
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




