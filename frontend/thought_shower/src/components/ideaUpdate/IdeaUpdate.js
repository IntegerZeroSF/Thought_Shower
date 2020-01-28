import React, { useState }from 'react'

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
  
      props.createIdea(Idea);
    };
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modalhead">hi</div>
          <form className="inputform" onSubmit={e => handleSubmit(e)}>
            {/* <div>
              <input
                className="input"
                value={title}
                type="text"
                placeholder="Idea Name"
                onChange={e => handleChangeTitle(e)}
              ></input>
            </div> */}
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
              <button className="sumbitbtn">Delete</button>
            </div>
          <button onClick={props.hideInputModal} className="closebtn">
            close
          </button>
        </section>
      </div>
    
  )
}
export default IdeaUpdate