import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react";
import api from "../utils/api";
import VideoCard from "../components/VideoCard";

const Results = () => {
const [page, setPage] = useState(1);
const [token, setToken] = useState();
const [searchParams] = useSearchParams();
const [data, setData] = useState([]);

// 1) url den aratılan terime uygun verileri al
const query = searchParams.get("search_query");
useEffect(()=>{
    const params = {
        query: query,
        token: page > 1 ? token : undefined,
    };

    api.get("/search", { params }).then((res) => {
         console.log(res);


    // verilerin devamını almayı sağlayan token state
    setToken(res.data.continuation);

setData(res.data.data)

});

}, []);

  return (
    <div className="flex gap-3">
     <SideBar/>
     <div className="overflow-auto">
     <h2 className="text-xl">
        <span>{query} </span> için sonuçlar
     </h2>
     <div>
        {data.map((item)=>item.type==="video" && 
            <VideoCard key={item.id}  video={item} />
         )}
     </div>
     </div>
    </div>
  );
};

export default Results
