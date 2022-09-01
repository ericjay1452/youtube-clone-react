import React from 'react'
import {Link} from "react-router-dom"
import { Stack } from '@mui/material'
import Logo from "../../Utils/Logo/Youtube-Logo.svg"
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <Stack
    direction={"row"}
    sx = {{background : "#000", position : "sticky", top : "0"}}
    alignItems = {"center"}
    p= {2}
    justifyContent = {"space-between"}
    >
   <Link to = "/" style={ {display : "flex", alignItems : "center"}}>
    <img src = {Logo} alt = "Logo" height={45}/>
   </Link>

   <SearchBar />
    </Stack>
  )
}

export default NavBar