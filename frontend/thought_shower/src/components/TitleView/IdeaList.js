import React, { useState, useEffect } from "react";
import "./TitleView.css";
import DeleteBtn from "../Delete/DeleteBtn"
import UpdateBtn from "../Update/UpdateBtn"

// const axios = require('axios').default;
// const URL = 'https://thought-shower.herokuapp.com'

function IdeaList(props) {
    let [showIdea, setShowIdea] = useState(false);
  if (props.data) {
    
    const showIdeaModal = () => {
      setShowIdea(true);
    };
    const hideIdeaModal = () => {
      setShowIdea(false);
    };
    console.log("titleview", props);

     const ideas = props.data.map(arr => {
      const color =
        arr.likes >= 0 ? (arr.likes > 0 ? "green" : "black") : "red";
      return (
        <div className="container">
          <h1 style={{ textAlign: "left" }}>{arr.title}</h1>
          <h2 style={{ textAlign: "left" }}>{arr.category}</h2>
          <textarea className="view-details">{arr.post}</textarea>
          <UpdateBtn data={props.data}
                    updateIdea={props.updateIdea}/>
          <DeleteBtn deleteIdea={props.deleteIdea}/>
          <div className="button-container">
            <span className={"like-count " + color}>{arr.likes}</span>
            <button className="like-button upvote">
              <img src="thumbs_up.png" className="like" />
            </button>
            <button className="like-button downvote">
              <img src="thumbs_down.png" className="like" />
            </button>
          </div>
        </div>
      );
    });

    return <div>{ideas}</div>;
  } else {
    return <></>;
  }
}
export default IdeaList;