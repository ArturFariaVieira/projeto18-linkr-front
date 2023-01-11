import Post from "../components/Post.js";
import arrayposts from "../assets/arrayposts.js"
import Posts from "../components/Posts.js";

export default function Timeline() {

 
  return(
    
    <>
      <Post />
      {arrayposts.map((postinfo) => <Posts key={postinfo.id}  post={postinfo} />)}
    </>
  )
}