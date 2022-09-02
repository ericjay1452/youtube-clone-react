import React,{useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {Videos} from "../../Components"
import { YoutubeApi } from '../../Utils/YoutubeApi'

const VideoDetail = () => {
  const {id} = useParams()
  
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{xs : "column", md: "row"}}>
        <Box flex={1}>

          <Box sx = {{width : "100%", position : "sticky", top : "86px"}}>
            <ReactPlayer />
          </Box>

        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail