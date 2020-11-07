import React, {useContext, useState} from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";


export const TweetContext = React.createContext(null);


export const TweetProvider = ({children}) => {

    const tweetContents="Where in the world am I?";
    const displayName="Carmen Sandiego ✨";
    const username="carmen-sandiego";
    const avatarSrc=avatar;
    // const  isRetweetedByCurrentUser=false;
    // const isLikedByCurrentUser=false ;

  
    const date = moment().format('h:mm A - MMM Do, YYYY') ;
    console.log(date);

    const [numOfLikes, setNumOfLikes] = useState(460)
    const [numOfRetweets, setNumOfRetweets] = useState(65)
    const [isLiked, setIsLiked] = useState(false)
    const [isRetweeted, setIsRetweeted ] = useState(false)

    return (
    
            <TweetContext.Provider 
            value={{tweetContents,
                displayName,
                username,
                avatarSrc,
                isRetweeted:isRetweeted,
                isLiked:isLiked,
                date,
                numOfLikes,
                numOfRetweets
            }}>
                {children}
            </TweetContext.Provider>

    )
};

