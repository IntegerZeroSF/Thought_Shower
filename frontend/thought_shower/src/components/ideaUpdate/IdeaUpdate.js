import React, { useState }from 'react';
import DeleteBtn from "../Delete/DeleteBtn"
import "./IdeaUpdate.css"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function IdeaUpdate(props){

  let [title, setTitle] = useState();
    let [category, setCategory] = useState();
    let [post, setPost] = useState();

    
  
    const showHideClassName = props.showInput
      ? "modal display-block"
      : "modal display-none";
  
 
    const handleChangeCategory = e => {
      e.preventDefault();
      setCategory(e.target.value);
    };
    const handleChangePost = e => {
      e.preventDefault();
      setPost(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      const Idea = {
        title: title,
        category: category,
        post: post
      };
  
      props.updateIdea(Idea);
    };

    return (
      <div className={showHideClassName}>
        <Card className="modal-main">
          <Card.Title className="modalhead">hi</Card.Title>
          <form className="form" onSubmit={e => handleSubmit(e)}>
            <div>
              <input
                className="input"
                value={category}
                type="text"
                placeholder="Category"
                onChange={e => handleChangeCategory(e)}
              ></input>
            </div>
            <div>
              <textarea
                className="input description"
                value={post}
                type="text"
                placeholder="Description"
                onChange={e => handleChangePost(e)}
         
              ></textarea>
            </div>
  
            <div>
              <button className="sumbitbtn">Udpate</button>
            </div>
          </form>
          <div>
              <DeleteBtn/>
            </div>
          <button onClick={props.hideIdeaModal} className="closebtn">
            close
          </button>
        </Card>
      </div>
    
  )
}
export default IdeaUpdate