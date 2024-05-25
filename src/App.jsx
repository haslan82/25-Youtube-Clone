import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";




function App() {
  
  return (
    <BrowserRouter>
    
    <Header />

    <Routes>

<Route path="/" element={<Feed />}  />
<Route path="/watch" element={<VideoDetail />}  />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
