import React, { Component } from 'react'
import './ToDoListItem.css'
import trashpng from '../../img/trash.png'
import importantpng from '../../img/important.png'

export default class ToDoListItem extends Component {





    render() {
        let { label, onDeleted,
            onImportant, onDone,
            done, important
        } = this.props;

        let classNameElement = "Item";

        if (done) {
            classNameElement += " done";
        }
        if (important) {
            classNameElement += " important"
        }

        return (
            <div className="ToDoListItem">
                <div className={classNameElement}>
                    <span onClick={onDone}>{label}</span>
                </div>
                <div>
                    <button
                        onClick={onDeleted}
                    ><img src={trashpng} alt="trash" /></button>
                    <button
                        onClick={onImportant}
                    ><img src={importantpng} alt="important" /></button>
                </div>


            </div>
        )
    }
}



