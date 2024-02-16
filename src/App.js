import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const apiKey = process.env.REACT_APP_News_API_KEY;
  const [progress, setProgress] = useState(0);

  const setLoadTopBar = (progress) => {
    setProgress(progress);
  }
  let size = 6;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />

        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"general"} pageSize={size} category={"general"} country={"in"} />} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"business"} pageSize={size} category={"business"} country={"in"} />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"entertainment"} pageSize={size} category={"entertainment"} country={"in"} />} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"health"} pageSize={size} category={"health"} country={"in"} />} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"science"} pageSize={size} category={"science"} country={"in"} />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"sports"} pageSize={size} category={"sports"} country={"in"} />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setLoadTopBar} key={"technology"} pageSize={size} category={"technology"} country={"in"} />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}



export default App;