import React, {Component} from 'react'
import './SearchPanel.css'


export default class SearchPanel extends Component {
    
   state = {
       term: ''
   }

   onChangeSearch=(e)=>{
       const term = e.target.value
       this.setState({ term })
       this.props.onChangeSearch(term)
   }
   
    render(){
        return (
            <div className="SearchPanel">
                <div>
                    
                    <input 
                    placeholder="search"
                    value={this.state.term}
                    onChange={this.onChangeSearch}
                    />
                </div>
                
            </div>
        )
    }
    
}

