import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from 'react-player'
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import VideoCard from "../../components/VideoCard";



const VideoDetail = () => {
  const [video, setVideo] = useState(null);
const [comments, setComments] = useState(null);
  
  // arama paremetrelerine erişim için kullanırız
  const [searchParams] = useSearchParams();

  // URL den "v" isimli paremetreye eriştik
  const id = searchParams.get("v");
  //!console.log(id);
  //id si bilinen videonun bilgilerini api den al
useEffect(() => {
api.get(`/video/info?id=${id}&extend=1`).then((res)=> setVideo(res.data));
api.get(`/comments?id=${id}`).then((res)=> setComments(res.data));
},[id]);
//! console.log(video);
  return (
    <div className="detail-page h-screen overflow-auto">

      {/* video içeriği */}
     <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden ">
     <ReactPlayer
      controls
     width={"100%"}
     height={"100%"}
       url={`https://www.youtube.com/watch?v=${id} `} 
      />
     </div>

{!video && <p>yükleniyor</p>}
{video && (
  <>
  {/* Başlık bilgileri */}
  <h1 className="my-3 text-xl font-bold">{video.title} </h1>
  {/* Kanal Bilgileri */}
  <ChannelInfo video={video}  />
  {/* video Bilgileri */}
  <VideoInfo video={video} />
  {/* yorumlar */}
  <Comments data={comments} />
  </>
)}


<div className="d-flex flex-col gap-5 p-1">
  {video?.relatedVideos.data.map(
    (item) => 
    item.type === "video" && (
    <VideoCard key={item.videoId} video={item} isRow={true} />
  )
   )}
</div>
</div>
  );
 
};

export default VideoDetail;
