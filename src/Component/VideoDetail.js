import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fecthApi } from "../utils/fetchApi";
import VideoCard from "./VideoCard";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoSuggest, setVideoSuggest] = useState(null);

  useEffect(() => {
    fecthApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
    fecthApi(`search?part=id,snippet,&relatedToVideoId=${id}&type=video`).then((data) => setVideoSuggest(data.items));
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="grow md:basis-9/12 lg:basis-8/12">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="h-full" width="100%" />
        <div className="p-4">
          <h1 className="text-lg font-medium">{videoDetail?.snippet.title}</h1>
          <p className="mb-4">{videoDetail?.statistics.viewCount} views</p>
          <hr />
          <p className="mt-4 mb-4">{videoDetail?.snippet.description}</p>
          <hr />
        </div>
      </div>
      <div className="grid grid-cols-1 md:basis-3/12 lg:basis-4/12 p-4 mb-2">
        {videoSuggest?.map((video, i) => {
          return <VideoCard key={i} video={video} />;
        })}
      </div>
    </div>
  );
}

export default VideoDetail;
