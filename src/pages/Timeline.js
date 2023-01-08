import Post from "../components/Post.js";
import Posts from "../components/Posts.js";
import arrayposts from "../assets/arrayposts.js"

export default function Timeline() {

  function handlelike (id, liked){
    if(liked){
      
    }


  }
  return(
    
    <>
      <Post />

      {arrayposts.map((postinfo) => <Posts  post= {postinfo} handlelike/>)}
    </>
  )
}