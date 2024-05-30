import { useState } from "react"
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({video}) => {
const[isHover, setIsHover] = useState(false);


const navigate = useNavigate();
//console.log(video); 
 return (
    // <div>
    
    //   <div>
    // <img src={isHover &&  
    //   video.richThumbnail ? video.richThumbnail[0].url : video.thumbnail[0].url}
    //    alt="resim" />
    //   <p>{video.title} </p>
      
    //   </div>
    // </div>
    <div onClick={()=> navigate(`watch?v=${video?.videoId}`)} 
    className="cursor-pointer"
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    >
 {/* resim alanı */}
      <div >
    <img className="w-full h-full rounded-lg" 
    src={ isHover && 
      video.richThumbnail ? video.richThumbnail[0].url : video.thumbnail[0].url}
       alt="resim" />
      <p>{video.title} </p>
      
      </div>

{/* video alt detay alanı */}
<div className="">
<img 
className="w-14 h-14 rounded-full "  
src={video.channelThumbnail && video.channelThumbnail[0].url} 
alt="hata" />
</div>
<h4 className="font-bold line-clamp-2">{video.title} </h4>
<p>{video.channelTitle} </p>
<div className="flex gap-2">
  <p className="flex gap-2">
    <span>{millify(video.viewCount)} </span>
    <span>Görüntülenme</span>
  </p >
  <p>{video.publishedTimeText} </p>
</div>

    </div>
  );
};

export default VideoCard;
