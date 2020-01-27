import React, { useState } from "react";

function UpdateForm(props) {
  let [title, setTitle] = useState();
  let [category, setCategory] = useState();
  let [post, setPost] = useState();
  
  const showHideClassName = props.showUpdate
    ? "modal display-block"
    : "modal display-none";

  const handleChangeTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };
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
      post: post,
      
    };

    props.updateIdea(Idea);
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modalhead">Update an Idea!</div>
        <form className="updateform" onSubmit={e => handleSubmit(e)}>
          <div>
            <input
              className="input"
              value={title}
              type="text"
              placeholder="Idea Name"
              onChange={e => handleChangeTitle(e)}
            ></input>
          </div>
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
            <input
              className="input"
              value={post}
              type="text"
              placeholder="Description"
              onChange={e => handleChangePost(e)}
            ></input>
          </div>
          
          <div>
            <button className="sumbitbtn">Submit</button>
          </div>
        </form>
        <button onClick={props.hideUpdateModal} className="closebtn">
          close
        </button>
      </section>
    </div>
  );
}

export default UpdateForm;
