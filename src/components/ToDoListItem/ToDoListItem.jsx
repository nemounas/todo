import React, { Component } from 'react'
import './ToDoListItem.css'
import trashpng from '../../img/trash.png'
import importantpng from '../../img/important.png'

export default class ToDoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onlabelClick = () => {
        this.setState(({ done })=>{
            
            return {
                done: !done
            }
                
        });
    };

    makeImportant = () => {
        this.setState(({ important })=>{
            return {
                important: !important
            }
            
        })
    }

    render() {

        let classNameElement = "Item";

        const { done, important } = this.state;

        if (done) {
            classNameElement += " done";
        }

        if (important) {
            classNameElement += " important"
        }

        let { label, onDeleted } = this.props;



        return (
            <div className="ToDoListItem">
                <div className={classNameElement}>
                    <span onClick={this.onlabelClick}>{label}</span>
                </div>
                <div>
                    <button
                    onClick={onDeleted} 
                    ><img src={trashpng} alt="trash" /></button>
                    <button
                     onClick={this.makeImportant}
                    ><img src={importantpng} alt="important" /></button>
                </div>
                

            </div>
        )
    }
}



