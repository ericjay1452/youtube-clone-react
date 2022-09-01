import React, {useState, useEffect} from 'react'
import {Stack, Box, Typography} from "@mui/material"


const Feed = () => {
  return (
    <Stack
    // For creating responsiveness on devices sm, md e.t.c (i.e code in sx)
    sx = {{flexDirection: {sx: "column", md : "row"}}}
    >
     <Box 
     
    // For creating responsiveness on devices sm, md e.t.c (i.e code in sx)
    sx = {{height: {sx: "auto", md : "92vh"}, }}
     >

     </Box>
    </Stack>
  )
}

export default Feed