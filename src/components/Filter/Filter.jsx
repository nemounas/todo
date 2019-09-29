import React, { Component } from 'react'
import './Filter.css'


export default class Filter extends Component {



    state = {
        filterClassNameAll: "btn btn-outline-secondary",
        filterClassNameActive: "btn btn-outline-secondary",
        filterClassNameDone: "btn btn-outline-secondary"
    }

    filterToDone = () => {
        this.setState({
            filterClassNameAll: "btn btn-outline-secondary",
            filterClassNameActive: "btn btn-outline-secondary",
            filterClassNameDone: "btn btn-info"
        })
        this.props.Filters('Done')
    }

    filterToAll = () => {
        this.setState({
            filterClassNameAll: "btn btn-info",
            filterClassNameActive: "btn btn-outline-secondary",
            filterClassNameDone: "btn btn-outline-secondary"
        })
        this.props.Filters('All')
    }

    filterToActive = () => {
        this.setState({
            filterClassNameAll: "btn btn-outline-secondary",
            filterClassNameActive: "btn btn-info",
            filterClassNameDone: "btn btn-outline-secondary"
        })
        this.props.Filters('Active')
    }


    render() {



        return (
            <div className="Filter">
                <button
                    className={this.state.filterClassNameAll}
                    onClick={this.filterToAll}
                >All
                </button>

                <button
                    className={this.state.filterClassNameActive}
                    onClick={this.filterToActive}
                >Active
                </button>

                <button
                    className={this.state.filterClassNameDone}
                    onClick={this.filterToDone}
                >Done
                 </button>
            </div>
        )
    }
}



