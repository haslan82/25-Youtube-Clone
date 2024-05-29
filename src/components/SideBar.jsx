import { Link } from "react-router-dom";
import {categories} from "../constants/index";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";


const SideBar = () => {

  const {selectedCategory, setSelectedCategory} = useContext (VideoContext);
  // console.log(selectedCategory);
  // console.log(setSelectedCategory);
  return (
    <div className="flex flex-col p-1 md:p-4">
  {categories?.map((item, i) => (
       
        <Link onClick={() => setSelectedCategory(item)} key={i}>
            <div className={`
            ${selectedCategory.name===item.name && "bg-[#2d2d2d]"}
            flex gap-2 py-4 px-2 md:px-3 items-center rounded-md hover:bg-[#2d2d2d] cursor-pointer md:text-lg`}>
            <span className="max-md:text-2xl">{item.icon} </span>
            <span className="max-md:hidden line-clamp-1">{item.name} </span>
            </div>

            {item.divider && <hr/>}
        </Link>

    
    ))}

    </div>

  );
};

export default SideBar;
