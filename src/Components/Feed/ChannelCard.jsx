import React from 'react'
import {Box,CardContent,CardMedia,Media, Typography} from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import {Link} from "react-router-dom"

import{demoProfilePicture} from "../../Utils/Constant"

const ChannelCard = ({channelDetail}) => {
  return (
    <Box
    sx ={{boxShadow : "none", borderRadius : "20px"}}>

       <Link to = {`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx = {{display : "flex", 
        flexDirection : "column",
        justifyContent : "center",
        textAlign : "center",
        color : "#fff"
      }}>
        <CardMedia 
        image = {channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt = {channelDetail?.snippet?.title}
        sx = {{borderRadius : "50%", width : "180px", height : "180px", mb : 2, border: "1px solid #e3e3e3"}}
        />
      </CardContent>
       </Link>
    </Box>
  )
}

export default ChannelCard