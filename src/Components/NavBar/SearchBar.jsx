import React, { Component } from 'react'
import {Search} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from "@mui/material"

const SearchBar = () =>{
    return (
      <Paper
      component={"form"}
      onSubmit = {""}
      sx = {{
        borderRadius : 20,
        border : "1px solid #e3e3e3", 
        pl : 2, 
        boxShadow : "none",
        mr : {sm : 5} 
      }} 
      >
       <input className='search-bar'
       value={""}
       onChange = {""}
       placeholder = {"Search ...."}
       />

       <IconButton sx={{p: "5px", color : "red",}} type = "submit">
        <Search />
       </IconButton>
      </Paper>
    )
}

export default SearchBar