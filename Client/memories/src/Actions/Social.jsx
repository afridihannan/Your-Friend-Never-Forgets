import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Social(props) {
  let iconstyle = {
    fontSize: "45px",
    color: "black",
    margin: '20px',
  };
  console.log(props);
  return (
    <SocialLinks>
      <Iconlink href={props.fb}>
        <FacebookIcon style={iconstyle} />
      </Iconlink>
      <Iconlink href={props.git}>
        <GitHubIcon style={iconstyle} />
      </Iconlink>
      <Iconlink href={props.tweet}>
        <TwitterIcon style={iconstyle} />
      </Iconlink>
    </SocialLinks>
  );
}
const SocialLinks=styled.div`
 display:flex;
 justify-content:space-evenly;
`
const Iconlink = styled.a`
 //border:2px solid pink;
 box-shadow:0px 0px 5px rgba(0,0,0,0.8);
 margin:4px;
 margin-top:7px;
`;
// const Facebooklogo = styled(FacebookIcon)`
//   color: black;
//   font-size: 300px;
// `;

