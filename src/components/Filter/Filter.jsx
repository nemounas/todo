import React, {Component} from 'react'
import './Filter.css'


export default class Filter extends Component{

    render(){
        return (
            <div>
                <button className="btn btn-info">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}



 