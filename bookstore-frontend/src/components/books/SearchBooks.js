import React from 'react'
import { Button } from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBooks(props) {

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" name="search" id="search-form" value={props.searchEntry} placeholder="Search" onKeyPress={props.onKeyPress} onChange={e => props.handleChange(e)} />
      <Button type="submit" variant="secondary" onClick={e => props.handleSubmit(e)} id="search-button">
        <SearchIcon />
      </Button>
    </div>
  );
}