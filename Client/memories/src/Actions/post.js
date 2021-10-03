import React from 'react'
import styled from 'styled-components'
import Hannan from '../Api/Index'
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

// hello world
function Trav(props) {
    let iconstyle = {
        fontSize: "45px",
        color: "black",
        margin: '20px',
    };
    console.log(props)
    return (
        <Container>
            <Card>
                <Imagetag src={props.Img} />
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
            </Card>
        </Container>
    )
}
export default function Post() {
    return (
        <>
          <DisCard>
              {Hannan.map(Trav)};
          </DisCard>
        </>
    )
}
const Container = styled.div`
//border:1px solid green;
height:100vh;
width:100vw;
//background-color:pink;
`
const Card = styled.div`
 //border:3px solid black;
 box-shadow:0px 0px 5px rgba(0,0,0,0.8);
 width:350px;
 height:370px;
 margin:00 auto;
 background-color:white;
`
const SocialLinks = styled.div`
 display:flex;
 justify-content:space-evenly;
`
const Iconlink = styled.a`
 //border:2px solid pink;
 box-shadow:0px 0px 5px rgba(0,0,0,0.8);
 margin:4px;
 margin-top:7px;
 cursor:pointer;
`;
const Imagetag = styled.img`
  width: 100%;
  height: 250px;
`;
const DisCard=styled.div`
display:flex;
`

