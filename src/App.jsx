import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import Results from "./pages/Results";
import Undefined from "./pages/Undefined";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Undefined />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Feed from "./pages/Feed";
// import VideoDetail from "./pages/VideoDetail";
// import Results from "./pages/Results";




// function App() {
  
//   return (
//     <BrowserRouter>
    
//     <Header />

//     <Routes>

// <Route path="/" element={<Feed />}  />
// <Route path="/watch" element={<VideoDetail />}  />
// <Route path="/results" element={<Results/>} />
//     </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
