import React, { useState } from "react";
import "./InputForm.css";

function InputForm(props) {
  let [title, setTitle] = useState();
  let [category, setCategory] = useState();
  let [post, setPost] = useState();

  const showHideClassName = props.showInput
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
      post: post
    };

    props.createIdea(Idea)
    props.hideInputModal()
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modalhead">Create a New Idea!</div>
        <form className="inputform" onSubmit={e => handleSubmit(e)}>
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
            <textarea
              className="input description"
              value={post}
              type="text"
              placeholder="Description"
              onChange={e => handleChangePost(e)}
              // rows = "40"
              // columns = "60"
            ></textarea>
          </div>

          <div>
            <button className="sumbitbtn">Submit</button>
          </div>
        </form>
        <button onClick={props.hideInputModal} className="closebtn">
          close
        </button>
      </section>
    </div>
  );
}

export default InputForm;
