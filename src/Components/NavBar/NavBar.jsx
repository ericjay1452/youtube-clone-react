import React from 'react'
import {Link} from "react-router-dom"
import { Stack } from '@mui/material'
import Logo from "../../Utils/Logo/Youtube-Logo.svg"

const NavBar = () => {
  return (
    <Stack
    direction={"row"}
    sx = {{background : "#000", position : "sticky", top : "0"}}
    alignItems = {"center"}
    p= {2}
    justifyContent = {"space-between"}
    >

    </Stack>
  )
}

export default NavBar