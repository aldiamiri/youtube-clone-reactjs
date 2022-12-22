import React, { useState, useEffect } from "react";
import { fecthApi } from "../utils/fetchApi";
import SideBar from "./SideBar";
import Videos from "./Videos";

function Feed() {
  const [selectCategory, setSelectCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fecthApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => setVideos(data.items));
  }, [selectCategory]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="py-2 flex overflow-auto sm:flex-col sm:basis-3/12">
        <SideBar selectCategory={selectCategory} setSelectCategory={setSelectCategory} setVideos={setVideos} />
      </div>
      <div className="bg-gray-50 sm:basis-9/12">
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Feed;
