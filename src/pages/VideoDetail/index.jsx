import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";


const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  
  // arama paremetrelerine erişim için kullanırız
  const [searchParams] = useSearchParams();

  // URL den "v" isimli paremetreye eriştik
  const id = searchParams.get("v");
  console.log(id);
useEffect(() => {
api.get(`/video/info?id=${id}`).then((res)=> setVideo(res.data));
},[]);
console.log(video);
  return <div>video detaylars</div>;
 
};

export default VideoDetail;
