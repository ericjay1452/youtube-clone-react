import axios from "axios";

const Root_Uri = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const YoutubeApi = async (url)=> {
    const {data} = await axios.get(`${Root_Uri}/${url}`,options);
    return data;
  }