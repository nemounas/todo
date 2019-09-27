import React, {Component} from 'react'
import './ToDoListItem.css'
import TrashAndImportant from '../TrashAndImportant/TrashAndImportant'


export default class ToDoListItem extends Component{

    render(){

        let { label, important = false } = this.props

        const style = {
            color: (important ? 'red' : 'black')
        }
    
        return (
            <div className="ToDoListItem">
                <div>
                    <span style={style}>{label}</span>
                </div>
                <div>
                    <TrashAndImportant />
                </div>
            </div>
        )
    }
}



