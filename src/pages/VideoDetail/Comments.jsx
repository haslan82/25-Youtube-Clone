import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Comments = ({data}) => {
 //! console.log(data);


  return (
    <div className="my-6">
      <h2 className="text -xl font-bold">{data.commentsCount} </h2>
      <input 
      type="text" 
      className="w-full border-b bg-transparent outline-none mb-5 p-2"
       placeholder="Yorum Ekleyiniz"/>

       {data?.data.map((i, index)=> 
        (
          <div  className="flex gap-2 items-center px-1 py-4">
            <img src={i.authorThumbnail[0].url} className="rounded-full" alt="" />
            <div className="flex flex-col gap-2">
              <h5 className="flex gap-2 items-center">
                <span className="font-semibold">{i.authorText} </span>
                <span className="text-sm text-gray-400">{i.publishedTimeText} </span>
              </h5>
              <p>{i.textDisplay} </p>

              <div className="flex items-center gap-5">
              <div className="flex gap-1 items-center hover:bg-gray-700 rounded p-1 cursor-pointer">

              <AiFillLike />
        { <span> {i.likesCount} </span> }
              </div>
              <div className=" hover:bg-gray-700 rounded p-1 cursor-pointer">
              <AiFillDislike />
              </div>
              <span className=" hover:bg-gray-700 rounded p-1 cursor-pointer">Yanıtla</span>
              {/* {i.replyCount > 0 && <div>Yanıt</div>}  */}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Comments
