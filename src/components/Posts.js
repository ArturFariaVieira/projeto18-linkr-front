import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaBold, FaHeart, FaRegHeart } from "react-icons/fa"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css";
import { ReactTagify } from "react-tagify";




export default function Posts({post}, handlelike) {
    const [likes, setLikes] = useState("Você, o diabo e mais 666 pessoas")
    const [picture, setPicture] = useState("https://cdn.shopify.com/s/files/1/0476/9506/9334/products/sombra-_0083_furia_1024x.jpg?v=1600106380")
    const [posts, setPosts] = useState([])
    console.log(post)

    const tagStyle = {
        color: '#FFFFFF',
        fontWeight: 700,
        cursor: 'pointer'
      };
    return (
        <>
            <Post >
                <img src={post.picture} />
                <Divicon >
                    {post.liked ? <FaHeart size={"30px"} color={"red"} onClick= {() => handlelike(post.id, post.liked)} /> : <FaRegHeart size={"30px"} onClick= {() => handlelike(post.id, post.liked)}/>}
                    <h2 id={post.id}>{post.likes}</h2>

                </Divicon>
                <h3> {post.username}</h3>
                <ReactTagify
                    tagStyle = {tagStyle}
                    tagClicked={(tag) => alert(tag)}>
                    <p>
                        {post.text}
                    </p>
                </ReactTagify>
                <Divmetadados>
                    <Textdiv>
                        <h1>{post.metadata.title}</h1>
                        <p>{post.metadata.description}</p>
                        <h3>{post.metadata.url}</h3>
                    </Textdiv>
                    <Imgdiv>
                        <img src={post.metadata.image} />

                    </Imgdiv>


                </Divmetadados>
                <ReactTooltip anchorId={post.id} place="bottom" type="info" content={likes} />

            </Post>



        </>

    )

};



const Post = styled.div`
height: 250px;
width: 80%;
max-width: 611px;
position: relative;
top: 90px;
background-color: #171717;
border-radius: 30px;
font-family: "Lato", sans-serif;


img { 
    height: 50px;
    width: 50px;
    border-radius: 25px;
    position: absolute;
    left: 16px;
    top: 16px;
}
h3 {
    position: absolute;
    top: 20px;
    left: 80px;
    color: #FFFFFF;
    font-size: 17px;
}
p{
    position: absolute;
    top: 50px;
    left: 80px;
    color: #B7B7B7;
    font-size: 15px;
    font-family: "Lato", sans-serif;

}
`
const Divicon = styled.div`
height: 50px;
width: 40px;
position: absolute;
display:flex;
flex-direction: column;
top: 86px;
left: 18px;
align-items: center;
h2 {
    width: 52px;
    color: white;
    font-size: 11px;
    line-height: 13px;
    
    }
svg {
    size: 18px;
    margin-left: 7px;
    margin-bottom: 5px;
}
`

const Divmetadados = styled.div`
height: 115px;
width: 75%;
position: absolute;
display: flex;
top: 80px;
left: 80px;
border: solid 1px #4D4D4D;
border-radius: 13px;
font-family: "Lato", sans-serif;


`
const Textdiv = styled.div`
width: 50%;
color: #B7B7B7;
h1{
    position: absolute;
    font-size: 11px;
    max-width: 70%;
    overflow-x: break;
    left: 11px;
    top 7px;
}
p{
    position: absolute;
    line-height: 10px;
    top: 35px;
    font-size: 9px;
    max-width: 70%;
    left: 11px;
    line-height: 10px;
    text-align: start;
    


}
h3{
    position: absolute;
    top: 85px;
    font-size: 8px;
    max-width: 70%;
    left: 11px;
    font-size: 9px;
    
}
`
const Imgdiv = styled.div`
position: absolute;
height: 100%;
width: 30%;
top: 0px;
right: 0px;
img{
    height: 100%;
    width: 86%;
    border-radius: 0px 12px 13px 0px;
    position: relative;
    top: 0px;
    right: 0px;
    
    
}`