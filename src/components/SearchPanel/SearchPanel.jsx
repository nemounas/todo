import React from 'react'
import './SearchPanel.css'
import Filter from '../Filter/Filter'

const SearchPanel = () => {
    return (
        <div className="SearchPanel">
            <div>
                <input placeholder="search" />
            </div>
            <div>
                <Filter />
            </div>
        </div>
    )
}

export default SearchPanel;