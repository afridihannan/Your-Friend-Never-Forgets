import React from "react";
import styled from "styled-components";

export default function Image(props) {
  console.log(props);
  return (
    <>
      <Imagetag src={props} />
    </>
  );
}
const Imagetag = styled.img`
  width: 100%;
  height: 250px;
`;
