import React, { Component } from 'react'
import {SearchIcon} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from "@mui/material"

export class SearchBar extends Component {
      constructor(props) {
        super(props);
      }

  render() {
    return (
      <Paper
      component={"form"}
      onChange = {()=>}
      sx = {{
        borderRadius : 20,
        border : "1px solid #e3e3e3", 
        pl : 2, 
        boxShadow : "none",
        mr : {sm : 5} 
      }} 
      >
       <input className='search-bar'/>
      </Paper>
    )
  }
}

export default SearchBar