import React from 'react'

export default function SearchBooks(props) {

    return (
        <div className="searchForm">
            <input 
            type="text" 
            name="search"
            value={props.searchEntry}
            placeholder="Search for a Book"
            onKeyPress={props.onKeyPress}
            onChange={e => props.handleChange(e)}/> 
            <button type="submit" onClick={e => props.handleSubmit(e)}>
                Search
            </button>
        </div> 
  );
}