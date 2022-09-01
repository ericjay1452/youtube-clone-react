import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from "../../Components"

const Videos = ({videos}) => {
    console.log({videos})
  return (
    <Stack
    direction={"row"}
    justifyContent = {"start"}
    flexWrap = {"wrap"}
    gap = {2}
    >
   {videos.map( (item, index) =>(
    <Box key = {index}>
        {/* Checking if item id is Video format, then render videos */}
        {item.id.videoId && <VideoCard video = {item} />}

        {/* Checking if type of Id = channel, then display Channel Details */}
        {item.id.channelId && <ChannelCard channelDetail = {item} />}
    </Box>
   ))}
    </Stack>
  )
}

export default Videos