import { useState } from "react";
import styled from "styled-components";
import editar from "../assets/editar.svg";

import LinkPreview from "./LinkPreview.js"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css";
import { ReactTagify } from "react-tagify";

export default function Publish({ post }){
  const [likes, setLikes] = useState(3);
  const [liked, setLiked] = useState(false);

  function onClickLike() {
    setLiked(!liked)
    if(liked) {
      const newQtdLikes = likes+1;
      setLikes(newQtdLikes);
    }else{
      const newQtdLikes = likes -1;
      if(newQtdLikes < 0) {
        setLikes(0);
      }else{
        setLikes(newQtdLikes);
      }
    }
  }

  const tagStyle = {
    color: '#FFFFFF',
    fontWeight: 700,
    cursor: 'pointer',
    marginBottom: '20px'
  };

  const classNamePostLiked = liked ? 'liked': 'unliked';
  const typeHeart = liked ? 'heart' :'heart-outline';

  return(
    <>
      <StyleContainer>
        <StylePublish>
          <div className="top">
            <div className="pictureuser">
              <img src={post.user?.picture} alt="user piture"/>
            </div>
            <h1 className="username">{post.user?.name}</h1>
            <div className="icons">
              <img className="pen" src={editar} alt="editar"/>
              <ion-icon name="trash"></ion-icon>
            </div>
          </div>
          <BodyPublish>
            <div className="icon">
              <ion-icon id={post.id} class={classNamePostLiked} size="50" name={typeHeart} onClick={() => onClickLike()}></ion-icon>
              <p className="qtdlikes">{likes} likes</p>
            </div>
            <div className="body">
              <span className="describe">
                <ReactTagify
                  className="io"
                  tagStyle = {tagStyle}
                  tagClicked={(tag) => alert(tag)}>
                  <p>
                      {post.text}
                  </p>
                </ReactTagify>
              </span>
              <LinkPreview/>
            </div>
          </BodyPublish>
        </StylePublish>
        <ReactTooltip anchorId={post.id} place="bottom" type="info" content={
          `Você, e mais ${likes} pessoas`
        } />
      </StyleContainer>
    </>
  )
}

const StyleContainer=styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`

const StylePublish=styled.div`
font-family: 'Lato', sans-serif;
background-color: #171717;
width: 611px;
border-radius: 16px;
padding: 20px;
flex-direction: column;
display: flex;
font-weight: 22.8px;


.top{
  display: flex;
  flex-direction: row;
  .pictureuser{
    overflow: hidden;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-right: 16px;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .username{
    margin-top: 12px;
    color:#707070;
    font-size: 20px;
    flex-grow: 2;
  }

 }

 .icons{
  margin-top: 12px;
 }
 .pen{
  margin-right: 12px;
  height: 15px;
 }

`
const BodyPublish=styled.div`
display: flex;
justify-content: space-between;
.publishpost{
  flex-direction: column;
  display: flex;
  margin-left: 50px;
}
.body{
  flex-grow: 2;
  display: flex;
  flex-direction: column;
}
.describe {
  margin-bottom: 20px;
}

.icon{
  flex-grow: 1;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  ion-icon{
    font-size: 19px;
  }
  margin-right: 30px;

  .qtdlikes {
    margin-top: 5px;
    text-align: center;
  }
  .liked {
    color: red;
    visibility: inherit;
  }
  .unliked {
    color: white;
    visibility: inherit;
  }
}
`