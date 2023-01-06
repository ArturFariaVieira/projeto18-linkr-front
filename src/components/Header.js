import styled from "styled-components";
import NavBar from "./NavBar.js"
import SearchBarMobile from "./SearchBarMobile.js";

export default function Header() {
  return(
    <HeaderStyle>
      <NavBar />
      <SearchBarMobile/>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div `
  height: 214px;
  @media screen and (max-width: 801px) {
    height: 144px;
  }
`
