import axios from "axios";

const Root_Uri = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
    url: Root_Uri,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };