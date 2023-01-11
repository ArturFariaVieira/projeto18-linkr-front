import Post from "../components/Post.js";
import arrayposts from "../assets/arrayposts.js"
import Publish from "../components/Publish.js";

export default function Timeline() {

 
  return(
    
    <>
      <Post />
      {arrayposts.map((postinfo) => <Publish key={postinfo.id}  post={postinfo} />)}
    </>
  )
}