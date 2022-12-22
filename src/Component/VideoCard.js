import React from "react";

function VideoCard({ video }) {
  const { id, snippet } = video;
  console.log(id, snippet);
  return (
    <div>
      <img src={snippet.thumbnails.high.url} alt="thumbnails" />
      <h1 className="font-medium">{snippet.title}</h1>
      <p className="font-light">{snippet.channelTitle}</p>
    </div>
  );
}

export default VideoCard;
