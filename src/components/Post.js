import styled from "styled-components";
import teste from"../assets/teste.png";
export default function Timeline(){
  return(
  <StyleContainer>
    <StylePost>
      <div className="top">
        <div className="pictureuser">
          <img src={teste} alt="user piture"/>
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

`
const StylePost=styled.div`
background-color: #FFF;
width: 611px;
height: 209px;
border-radius: 16px;
padding: 16px 18px;
flex-direction: column;
display: flex;

.top{
display: flex;
flex-direction: row;
margin-bottom: 25px;
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
  }

 }

`

const BodyPost=styled.form`
.formpost{
  flex-direction: column;
  display: flex;
}

`