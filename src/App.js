import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from "@mui/material"
import {NavBar, VideoDetail, ChannelDetail,SearchTerm, Error, Feed} from "./Components"

function App() {
  return (
    <BrowserRouter>
      <Box sx= {{backgroundColor : "#000"}}>
        <NavBar />

        <Routes>
         <Route path="/" exact element = {<Feed />}/>
         <Route path="/video/:id"  element = {<VideoDetail />}/>
         <Route path="/channel/:id" element = {<ChannelDetail />}/>
         <Route path="/search/:searchTerm" element = {<SearchTerm />}/>
         {/* <Route path="*"  element = {<Error />}/> */}
        </Routes>

      </Box>
    </BrowserRouter>
  );
}

export default App;
