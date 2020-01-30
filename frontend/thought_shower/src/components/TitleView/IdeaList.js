import React, { useState, useEffect } from "react";
// import "./TitleView.css";
import DeleteBtn from "../Delete/DeleteBtn"
import UpdateBtn from "../Update/UpdateBtn"
import TitleView from "./TitleView"

// const axios = require('axios').default;
// const URL = 'https://thought-shower.herokuapp.com'

function IdeaList(props) {
    let [showIdea, setShowIdea] = useState(false);
  if (props.data) {
    console.log("idealist",props)
    
    const showIdeaModal = () => {
      setShowIdea(true);
    };
    const hideIdeaModal = () => {
      setShowIdea(false);
    };
    console.log("titleview", props);

     const ideas = props.data.data.map(arr => {
      const color =
        arr.likes >= 0 ? (arr.likes > 0 ? "green" : "black") : "red";
      return (
        <div>
        <TitleView
              id = {arr._id}
              title = {arr.title}
              category={arr.category}
              likes={arr.likes}
              color={color}
              updateIdea={props.updateIdea}
              deleteIdea={props.deleteIdea}
              />
            
          
        </div>
      );
    });

    return <div>{ideas}</div>;
  } else {
    return <></>;
  }
}
export default IdeaList;