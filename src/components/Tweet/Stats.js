import React from "react";
import styled from "styled-components";

export const Stats = ({numOfRetweets, numOfLikes}) => {


return (
    <StatsContainer>     
        <Retweet><Bold>{numOfRetweets}</Bold> Retweets</Retweet>
        <Like><Bold>{numOfLikes}</Bold> Likes</Like>
    </StatsContainer>
)


}



const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`
const Bold = styled.span`
font-weight:bold;
color: black;
`

const Retweet = styled.div `
margin-right: 20px;
color: rgb(101, 119, 134);
`

const Like = styled.div `
color: rgb(101, 119, 134);
`