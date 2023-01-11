import styled from "styled-components";
import iconPicture from "../assets/icon-picture.svg";
import SearchBar from "./SearchBar.js";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Timeline() {
  const { picture } = useContext(AuthContext);

  return (
    <>
      <NavBar>
        <h1 className="logotype">linkr</h1>
        <SearchBar />
        <UserProfile>
          <div className="iconpicture">
            <img src={iconPicture} alt="icon" />
          </div>
          <div className="image">
            <img className="pictureurl" src={picture} alt="foto teste" />
          </div>
        </UserProfile>
      </NavBar>
    </>
  );
}
const NavBar = styled.div`
  background-color: #000;
  font-family: "Passion One", cursive;
  display: flex;
  justify-content: space-between;
  padding: 14px 28px;
  height: 72px;

  .logotype {
    font-size: 49px;
    letter-spacing: 0.05em;
  }
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  .iconpicture {
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }
  .image {
    overflow: hidden;
    width: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
