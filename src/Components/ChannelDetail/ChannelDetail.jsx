import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box, } from '@mui/material'
import {Videos, ChannelCard} from "../../Components"
import { YoutubeApi } from '../../Utils/YoutubeApi'

const ChannelDetail = () => {
  const {id} = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

console.log(channelDetail, videos)
  useEffect ( () =>{
    YoutubeApi(`channels?part=snippet&id=${id}`).then( (data) =>setChannelDetail(data?.items[0]))

    YoutubeApi(`search?channelId=${id}&part=snippet&order=date`).then( (data) =>setVideos(data?.items))

  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail