import { useSearchParams } from "react-router-dom";

const VideoDetail = () => {

  
  // arama paremetrelerine erişim için kullanırız
  const [searchParams] = useSearchParams();

  // URL den "v" isimli paremetreye eriştik
  const id = searchParams.get("v");
 // console.log(id);

  return <div>video detaylars</div>;
 
};

export default VideoDetail;
