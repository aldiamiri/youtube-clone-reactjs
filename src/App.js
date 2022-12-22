import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import Feed from "./Component/Feed";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
