import styled from "styled-components";
import Header from "./Header.js";

export default function Container({ Component, titlePage="timeline" }) {
  return (
    <>
      <Header/>
      <Section>
        <h2 className="page-title">{titlePage}</h2>
        <Component />
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  .page-title {

    margin-left: 28px;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: #fff;
   font-family: 'Oswald', sans-serif;
  }
`