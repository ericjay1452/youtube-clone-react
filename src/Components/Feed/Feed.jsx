import React, {useState, useEffect} from 'react'
import {Stack, Box, Typography} from "@mui/material"
import {SideBar, Videos} from '../../Components'

import {YoutubeApi} from "../../Utils/YoutubeApi"


const Feed = () => {
  // created a two dimensional layout 
  // 1.for SideBar
  // 2. for Videos Content

  const[selectedCategory, setSelectedCategory] =  useState("New")
  const [videos, setVideos] = useState([])
  useEffect ( ()=>{
   YoutubeApi(`search?part=snippet&q=${selectedCategory}`).then( (data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack
    // For creating responsiveness on devices sm, md e.t.c (i.e code in sx)
    sx = {{flexDirection: {sx: "column", md : "row"}}}
    >
     <Box 
     
    // For creating responsiveness on devices sm, md e.t.c (i.e code in sx)
    sx = {{height: {sx: "auto", md : "92vh"}, 
          borderRight: "1px solid #3d3d3d",
          px : {sx : 0, md : 2}}}
     >

     <SideBar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>

     <Typography className = "copyright"
     variant = "body1"
     sx = {{mt : 1.5, color : "#fff",}}
     >
  Created by Ilesanmi Erioluwa
     </Typography>
     </Box>

     {/* For  Videos Content*/}
     <Box p= {2} sx = {{overflowY : "auto", height : "90vh", flex : 2}}>
        <Typography color={"white"} mb = {2} variant = {'h4'} fontWeight = "bold">
        {selectedCategory } - <span style={{color : "orange"}}>Video</span>
        </Typography>

        <Videos videos = {videos} />
     </Box>

    </Stack>
  )
}

export default Feed