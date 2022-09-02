import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardMedia} from '@mui/material'
import {Videos, ChannelCard} from "../../Components"
import { YoutubeApi } from '../../Utils/YoutubeApi'

const ChannelDetail = () => {
  const {id} = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect ( () =>{
    YoutubeApi(`channels?part=snippet&id=${id}`).then( (data) =>setChannelDetail(data?.items[0]))

    YoutubeApi(`search?channelId=${id}&part=snippet&order=date`).then( (data) =>setVideos(data?.items))

  }, [id])
  return (<>
    {/* {console.log(channelDetail?.brandingSettings?.channel?.title)} */}

    <Box minHeight={"95vh"} margin = "auto">
      <Box>
      <div style={{
        // backgroundImage : `url(${channelDetail?.brandingSettings?.channel?.image?.bannerExternalUrl})`, 
      height  : "300px",zIndex : "1",
      background: "red",
     color : "white"}} />
      {/* <ChannelCard channelDetail = {channelDetail} /> */}
      <ChannelCard channelDetail = {channelDetail} marginTop = "-4rem"/>
      </Box>
       
        <Box display={"flex"} p = {2}>
          <Box sx = {{mr: {sm : "100px"}}} />
          <Videos videos = {videos} />
        </Box>
        
    </Box>
    </> 
  )
}

export default ChannelDetail