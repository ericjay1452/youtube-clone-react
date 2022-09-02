import React from 'react'
import {Box,CardContent,CardMedia, Typography} from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import {Link} from "react-router-dom"

import{demoProfilePicture} from "../../Utils/Constant"

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
    sx ={{boxShadow : "none",
     borderRadius : "20px",
     width : {xs: "356px", md: "320px",
     display : "flex",
     justifyContent: "center",
     alignItems: "center",
    //  height: "326px",
     margin : "auto",
     marginTop,
     zIndex : 100}}}>

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
        sx = {{borderRadius : "50%", 
        width : "180px", height : "180px", 
        mb : 2, 
        border: "1px solid #e3e3e3"}}
        />

        <Typography variant = "h6" fontFamily={"Lexend"}>
          {channelDetail?.snippet?.title}
          <CheckCircle sx = {{color : "orange", fontSize : 15, ml:"5px",}}/>
        </Typography>
        {channelDetail?.statistics?.subscriberCount &&(
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
       </Link>
    </Box>
  )
}

export default ChannelCard