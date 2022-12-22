import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import Feed from "./Component/Feed";
import VideoDetail from "./Component/VideoDetail";
import SearchFeed from "./Component/SearchFeed";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchInput" element={<SearchFeed />} />
      </Routes>
    </>
  );
}

export default App;
