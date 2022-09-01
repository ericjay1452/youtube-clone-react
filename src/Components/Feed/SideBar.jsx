import React, { Component } from 'react'
import { Stack } from '@mui/material'
import {categories} from "../../Utils/Constant"
import Category from './Category';

export class SideBar extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Stack
      direction={"row"}
      sx = {{
        overflow : "auto",
        height : {sx : "auto", md : "95%"},
        flexDirection : {md : "column"},
        color : "white",
        py : {sx : "10px"}
      }}
      >
       {
        categories.map( (category) => (
            <Category category = {category} key = {category.name}/>
        ))
       }
      </Stack>
    )
  }
}

export default SideBar