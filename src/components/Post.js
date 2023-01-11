import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Timeline() {
  const { picture } = useContext(AuthContext);
  return(
  <StyleContainer>
    <StylePost>
      <div className="top">
        <div className="pictureuser">
          <img src={picture} alt="user piture"/>
        </div>
        <h1 className="toptitle">
            What are you doing to share today?
        </h1>
      </div>
      <BodyPost>
        <form className="formpost">
          <input className="link" type="text" placeholder="http://..."/>
          <input className="describe" type="text" placeholder="Awesome article about #javascript"/>
          <button className="publish">Publish</button>
        </form>
      </BodyPost>
    </StylePost>
  </StyleContainer>
  )
}

const StyleContainer=styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
`
const StylePost=styled.div`
background-color: #FFF;
width: 611px;
border-radius: 16px;
padding: 16px 18px;
flex-direction: column;
display: flex;

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

  .toptitle{
    margin-top: 12px;
    color:#707070;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight:thin;
  }

 }

`

const BodyPost=styled.form`

.formpost{
  flex-direction: column;
  display: flex;
  margin-left: 50px;
  margin-bottom: 20px;

  .describe, .link {
    background-color: #EFEFEF;
    font-family: 'Lato', sans-serif;
    border: none;
    border-radius: 5px;
  }

  .describe{
    padding: 8px 12px 40px ;
    width: 502px;
    height: 66px;
    
  }

  .link{
    height: 30px;
    width: 503px;
    margin-bottom: 5px;
  }

  .publish{
    border: none;
    background-color: #1877F2;
    width: 112px;
    height: 31px;
    border-radius: 5px;
    margin-top: 5px;
    margin-left: 390px;
    color:#fff;
  }
}

`