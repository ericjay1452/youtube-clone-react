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
      height  : "300px",zIndex : "10",
      background: "red",
     color : "white",
     position : "relative"}} />
      {/* <ChannelCard channelDetail = {channelDetail} /> */}
      </Box>
       {/* <div style = {{position : "absolute", margin: "auto",right: "50%",top: "20rem",zIndex: "20", left: "50%",background:"white", display: "block", width : "auto"}}> */}
        <ChannelCard channelDetail = {channelDetail} />
        {/* </div> */}
    </Box>
    </>
  )
}

export default ChannelDetail