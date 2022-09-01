import React from 'react'
import { Stack } from '@mui/material'
import {categories} from "../../Utils/Constant"
import Category from './Category';

const SideBar =(props) =>  {
  const {selectedCategory, setSelectedCategory} = props
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
            <Category category = {category} key = {category.name} 
            selectedCategory = {props.selectedCategory}
            setSelectedCategory = {props.setSelectedCategory}
            />
        ))
       }
      </Stack>
    )
  }


export default SideBar