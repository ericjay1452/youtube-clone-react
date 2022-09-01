import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from "@mui/material"

function App() {
  return (
    <BrowserRouter>
      <Box sx= {{backgroundColor : "#000"}}>
        <NavBar />

        <Routes>
         <Route path="/" exact element = {<Feed />}/>
         <Route path="/video/:id"  element = {<VideoDetail />}/>
         <Route path="/channel/:id" exact element = {<ChannelDetail />}/>
         <Route path="/search/:searchterm"  element = {<SearchTerm />}/>
         <Route path="*"  element = {<Error />}/>
        </Routes>

      </Box>
    </BrowserRouter>
  );
}

export default App;
