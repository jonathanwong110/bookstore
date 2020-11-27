import React from 'react'
import { Button } from 'react-bootstrap'

export default function SearchBooks(props) {

  return (
    <div style={{textAlign: "center"}}>
      <input type="text" name="search" id="searchForm" value={props.searchEntry} placeholder="Search" onKeyPress={props.onKeyPress} onChange={e => props.handleChange(e)} />
      <Button type="submit" variant="primary" onClick={e => props.handleSubmit(e)}>
        Search
      </Button>
    </div>
  );
}