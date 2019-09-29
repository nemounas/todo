import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    render() {

        const { filter, onChangeButton } = this.props

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type='button'
                    key={name}
                    onClick={() => onChangeButton(name)}
                    className={`btn ${clazz}`}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}



