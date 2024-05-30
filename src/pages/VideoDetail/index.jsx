import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";


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
api.get(`/video/info?id=${id}`).then((res)=> setVideo(res.data));
api.get(`/comments?id=${id}`).then((res)=> setComments(res.data));
},[id]);
//!console.log(video);
  return <div>video detaylars</div>;
 
};

export default VideoDetail;
