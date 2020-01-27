import React, { useState } from "react";
import "./UpdateForm.css";

function UpdateForm(props) {
  let [title, setTitle] = useState();
  let [category, setCategory] = useState();
  let [post, setPost] = useState();
  let [search, setSearch] = useState();

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

  const handleChangeSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const idea = {
      title: title,
      category: category,
      post: post
    };

    props.updateIdea(idea);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log(search)
    console.log(props.data)
    props.data.map((item) => {
      if(item.title === search){
        console.log(item)
        setTitle(item.title)
        setCategory(item.category)
        setPost(item.post)
      }
    }
    )
    
  };


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <form className="updateform" onSubmit={e => handleSearch(e)}>
          <div>
            <input
              className="input"
              value={search}
              type="text"
              placeholder="Idea Name"
              onChange={e => handleChangeSearch(e)}
            ></input>
          </div>
           <div>
            <button className="sumbitbtn">Search</button>
          </div>
 
 
        </form>
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
            <textarea
              className="input description"
              value={post}
              type="text"
              placeholder="Description"
              onChange={e => handleChangePost(e)}
            ></textarea>
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
