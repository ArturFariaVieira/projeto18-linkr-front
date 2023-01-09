import styled from "styled-components";
import teste from "../assets/teste.png"
import editar from "../assets/editar.svg";

import LinkPreview from "./LinkPreview.js"
export default function Publish(){
  return(
    <>
      <StyleContainer>
        <StylePublish>
          <div className="top">
            <div className="pictureuser">
              <img src={teste} alt="user piture"/>
            </div>
            <h1 className="username">
              juvenal nome perfil fake
            </h1>
            <div className="icons">
              <img className="pen" src={editar} alt="editar"/>
              <ion-icon name="trash"></ion-icon>
            </div>
          </div>
          <BodyPublish>
            <div className="icon">
              <ion-icon size="50"name="heart-outline"></ion-icon>
              <p className="qtdlikes">34 likes</p>
            </div>
            <div className="body">
              <p className="describe">
                Muito maneiro esse tutorial de Material UI com React, 
                deem uma olhada! #react #material
              </p>
              <LinkPreview/>
            </div>
          </BodyPublish>
        </StylePublish>
      </StyleContainer>
    </>
  )
}

const StyleContainer=styled.div`
display: flex;
justify-content: center;
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
}
`