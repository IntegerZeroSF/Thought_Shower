import React, { useState, useEffect } from "react";
import "./TitleView.css";
import UpdateBtn from "../Update/UpdateBtn"
import DeleteBtn from "../Delete/DeleteBtn"
import { Link } from "react-router-dom"

import Card from 'react-bootstrap/Card'

// const axios = require('axios').default;
// const URL = 'https://thought-shower.herokuapp.com'

function TitleView(props) {
    let [showIdea, setShowIdea] = useState(false);
      
    const showIdeaModal = () => {
      setShowIdea(true);
    };
    const hideIdeaModal = () => {
      setShowIdea(false);
    };
    console.log("titleview", props);

       return (
<<<<<<< HEAD
          <Card className="container">
            <Card.Header as="h1" style={{ textAlign: "left" }}>{props.title}</Card.Header>
            <h4 style={{ textAlign: "left" }}>{props.category}</h4>

            <Card.Body>{props.post}</Card.Body>
            <div className="buttonDiv">
              <UpdateBtn id={props.id}
=======
          <div className="container">
            <h1 style={{ textAlign: "left" }}>{props.title}</h1>
            <h2 style={{ textAlign: "left" }}>{props.category}</h2>
            <UpdateBtn id={props.id}
                      title={props.title}
                      category={props.category}
                      post={props.post}
                      updateIdea={props.updateIdea}
                      />
            <DeleteBtn id={props.id} 
>>>>>>> 5bab91906ed23f871e6c58e00eff73694bc9f36a
                        title={props.title}
<<<<<<< HEAD
                      deleteIdea={props.deleteIdea}/>
            
            <div className="button-container">
              <span className={"like-count " + props.color}>{props.likes}</span>
              <button className="like-button upvote">
                <img src="thumbs_up.png" className="like" />
              </button>
              <button className="like-button downvote">
                <img src="thumbs_down.png" className="like" />
              </button>

=======
                        category={props.category}
                        post={props.post}
                        updateIdea={props.updateIdea}/>
              <DeleteBtn id={props.id} 
                          title={props.title}
                        deleteIdea={props.deleteIdea}/>
              
              <div className="button-container">
                <span className={"like-count " + props.color}>{props.likes}</span>
                <button className="like-button upvote">
                  <img src="thumbs_up.png" className="like" />
                </button>
                <button className="like-button downvote">
                  <img src="thumbs_down.png" className="like" />
                </button>
              </div>
>>>>>>> bootstrap_day2
            </div>
          </Card>
        );
}

export default TitleView;
