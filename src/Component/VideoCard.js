import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const { id, snippet } = video;

  return (
    <Link to={`/video/${id.videoId}`}>
      <div>
        <img src={snippet.thumbnails.high.url} alt="thumbnails" />
        <div className="p-3">
          <h1 className="font-medium">{snippet.title}</h1>
          <p className="font-light">{snippet.channelTitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
