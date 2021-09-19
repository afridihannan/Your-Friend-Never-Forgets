import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <div>
      <Container>
        <Heading>
          <Part>All</Part>
          <Part>Today</Part>
        </Heading>
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 120px;
  display: flex;
  background-color: blue;
  width:100vw;
`;
const Heading = styled.div`
  height: 60%;
  width:400px;
  display:flex;
  margin: auto auto;
  background-color: green;
`;
const Part = styled.div`
height:50%;
width:40%;
margin:auto auto;
align-items:center;
justify-content:center;
text-align:center;
background-color:white;
`;
