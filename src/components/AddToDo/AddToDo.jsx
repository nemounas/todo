import React, { Component } from 'react'
import './AddToDo.css'

export default class AddToDo extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {

        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="AddToDo "
                onSubmit={this.onSubmit}
            >
                <input type="text"
                    placeholder="add some todo"
                    className="form-control"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                ></input>
                <button className="btn btn-outline-secondary" >Add</button>
            </form>
        );
    }
}

