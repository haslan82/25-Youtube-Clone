import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api";

// context in temelini createContext ile oluşturduk
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState();
  //console.log(selectedCategory.type);

  useEffect(() => {
    const type = selectedCategory.type;
    //console.log(type);

    const url =
    type === "home"
      ? "/home"
      : type === "trending"
      ? "/trending"
      : type === "category"
      ? `/search?query=${selectedCategory.name}`
      : "";

    api.get(url).then((res) => 
      console.log (res));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </VideoContext.Provider>
  );
};

