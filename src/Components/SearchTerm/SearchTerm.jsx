import React, {useState, useEffect} from 'react'
import {Box, Typography} from "@mui/material"
import {Videos} from '../../Components'
import { useParams } from 'react-router-dom'

import {YoutubeApi} from "../../Utils/YoutubeApi"


const SearchTerm = () => {
  const {searchTerm } = useParams();

  const [videos, setVideos] = useState([])
  useEffect ( ()=>{
   YoutubeApi(`search?part=snippet&q=${searchTerm}`).then( (data) => setVideos(data.items))
  }, [searchTerm])
  return (
    <Box p= {2} sx = {{overflowY : "auto", height : "90vh", flex : 2}}>
    <Typography color={"white"} mb = {2} variant = {'h4'} fontWeight = "bold">
     Result for - <span style={{color : "orange"}}>{searchTerm} Video</span>
    </Typography>

    <Videos videos = {videos} />
 </Box>

  )
}

export default SearchTerm