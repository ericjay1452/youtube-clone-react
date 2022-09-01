import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import{demoThumbnailUrl,demoChannelUrl,
    demoVideoUrl,demoChannelTitle,demoVideoTitle} from "../../Utils/Constant"
    
const VideoCard = ({video}) => {
   console.log(video)
    const {id : {videoId}, snippet} = video;
    console.log(videoId, snippet)
  return (

    <Card sx = {{width : {sx : "100%", md : "320px"},
    borderRadius : "none",
    boxShadow : "none"
    }}>
        {/* For extracting */}
    <Link to= {videoId ? `/video/${videoId}` : demoVideoUrl }>

        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt = {snippet?.title}
        sx = {{width : 358, height : 180}}
        />
     </Link> 

     <CardContent 
     sx = {{background : "#1e1e1e", height : "106px",}}
     >
      {/* For TITLE */}
      <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
      <Typography variant='subtitle1' color = "#fff" fontFamily={'Lexend'}>
        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
      </Typography>
      </Link>
        
        {/* For Channel Title */}

        <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
      <Typography variant='subtitle1' color = "#fff" fontFamily={'Lexend'}>
        {snippet?.channelTitle || demoChannelTitle}
        <CheckCircle sx = {{color : "orange", fontSize : 15, ml:"5px"}}/>
      </Typography>
      </Link>

      </CardContent>   
    </Card>
  )
}

export default VideoCard