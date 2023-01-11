import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
export default function Timeline() {
  const { picture } = useContext(AuthContext);
  return (
    <StyleContainer>
      <StylePost>
        <div className="top">
          <div className="pictureuser">
            <img src={picture} alt="user piture" />
          </div>
          <h1 className="toptitle">What are you doing to share today?</h1>
        </div>
        <BodyPost>
          <form className="formpost">
            <input className="link" type="text" placeholder="http://..." />
            <input
              className="describe"
              type="text"
              placeholder="Awesome article about #javascript"
            />
            <button className="publish">Publish</button>
          </form>
        </BodyPost>
      </StylePost>
    </StyleContainer>
  );
}

const StyleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StylePost = styled.div`
  background-color: #fff;
  width: 611px;
  height: 209px;
  border-radius: 16px;
  padding: 16px 18px;
  flex-direction: column;
  display: flex;

  .top {
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
    .pictureuser {
      overflow: hidden;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      margin-right: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .toptitle {
      margin-top: 12px;
      color: #707070;
      font-size: 20px;
      font-family: "Lato", sans-serif;
    }
  }
`;

const BodyPost = styled.form`
  .formpost {
    border: hidden;
    flex-direction: column;
    display: flex;
    font-family: "Lato", sans-serif;
    position: relative;

    .link {
      width: 80%;
      height: 30px;
      margin-left: 65px;
      border: none;
      outline: none;
      font-family: "Lato", sans-serif;
      color: #949494;
    }
    .describe {
      width: 80%;
      height: 47px;
      margin-left: 65px;
      border: none;
      outline: none;
      font-family: "Lato", sans-serif;
      color: #949494;
    }
    .publish {
      position: absolute;
      height: 31px;
      width: 122px;
      right: 15px;
      bottom: -30px;
      border-radius: 5px;
      background-color: #1877f2;
      color: #ffffff;
      border: none;
    }
  }
`;
