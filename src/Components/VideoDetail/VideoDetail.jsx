import React,{useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { GrFormViewHide } from "react-icons/gr"
import millify from 'millify'

import {Videos} from "../../Components"
import { YoutubeApi } from '../../Utils/YoutubeApi'

const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)

  // for fetching a particular video
   useEffect (() =>{
   YoutubeApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>setVideoDetail(data?.items[0]))

   YoutubeApi(`search?part=snippet&relatedToVideoId=${id}&tye=video`)
   .then((data) =>setVideos(data?.items))
   },[id])

   if(!videoDetail?.snippet) return "Loading";
   if(!videos) return "LOADING";

   const {snippet : {title, channelId, channelTitle,}, statistics : {viewCount,likeCount}} = videoDetail
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{xs : "column", md: "row"}}>
        <Box flex={1}>

          <Box sx = {{width : "100%", position : "sticky", top : "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className = "react-player" controls
            />
            <Typography color= {"orange"} variant= {"h5"} fontWeight = {"bold"} p = {2}>
              {title}
            </Typography>

            <Stack direction = "row" px = {2} py = {1}justifyContent={"space-between"} sx= {{color : "white"}}>
              <Link to= {`/channel/${channelId}`}>
              <Typography variant={{sm:"subtitle1", md : "h6"}} color= {"orange"}>
                {channelTitle}
                <CheckCircle sx= {{color : "orange", ml : "5px", fontSize : "15px"}}/>
              </Typography>
              </Link>

              <Stack direction={"row"} gap = "20px" mr = "20px" color= "orange">
                <Typography variant='body1' sx= {{}}>
                  {millify(viewCount) } <GrFormViewHide />
                </Typography>

                <Typography variant='body1' sx= {{}}>
                  {millify(likeCount) } Likes
                </Typography>
              </Stack>

            </Stack>

          </Box>

        </Box>

  {/* Right hand videos */}
        {console.log(videos)}
      <Box px= {2} py = {{md:1, xs: 5}} justifyContent = "center" alignItems = "center">
       <Videos videos={videos} direction = "column"/>
      </Box>

      </Stack>
   
    
    </Box>
  )
}

export default VideoDetail