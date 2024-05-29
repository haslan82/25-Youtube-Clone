import { useState } from "react"


const VideoCard = (video) => {
const[isHover, setIsHover] = useState(false);
  return (
    <div>
      <div>
        <img 
        src={
            isHover && video.richThumbnail
 
            ? video.richThumbnail
            [0].url 
            : video.
            thumbnail
            [1].url
        } 
        alt="" 
        />
      </div>
    </div>
  );
};

export default VideoCard
