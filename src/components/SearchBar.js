import styled from "styled-components";
import { useState } from "react";

import searchIcon from "../assets/search.svg";

export default function SearchBar() {
  const [showIcon, setShowIcon] = useState("shown");
  const [searchQuery, setSearchQuery] = useState("");
  
  function onChange(value) {
    if(value !== "") {
      setSearchQuery(value);
    }
  }

  function showIconKeyUp(value) {
    if(value !== "") {
      setShowIcon("hidden");
    }else {
      setShowIcon("shown")
    }
  }
  return (
    <SearchForm>
      <InputGroup>
        <input className ="search" type="text" placeholder="search for people" onKeyUp={event => showIconKeyUp(event.target.value)} onChange={event => onChange(event.target.value)}/>
        <label className={`icon ${showIcon}`}>
          <img src={searchIcon} alt="search icon"/>
        </label>
      </InputGroup>
    </SearchForm>
  )
}

const SearchForm = styled.div`
  @media screen and (max-width: 801px) {
    display: none;
  }
`

const InputGroup=styled.div`
width: 563px;
position: relative;
overflow: hidden;
padding: 0 28px;

.search{
  overflow: hidden;
  width: 100%;
  border: none;
  border-radius: 8px;
  height: 45px;
  padding: 16px 10px;
  font-size: 19px;

  ::placeholder{
    color: #C6C6C6;
  }
}

.icon{
  float: right;
  position: absolute;
  top: 13px;
  right: 42px;

  &.hidden {
    transition: 2s;
    transition-timing-function: ease-out;
    transform: translateX(60vw);

  }

  &.shown{
    transition: .5s;
    transition-timing-function: ease-in;
    transform: translateX(0);
  }
}

`