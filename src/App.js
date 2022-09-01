import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from "@mui/material"

function App() {
  return (
    <BrowserRouter>
      <Box sx= {{backgroundColor : "#000"}}>
        NavBar
        <Routes>

        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
