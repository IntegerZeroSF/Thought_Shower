import React, { useState } from "react";

function DeleteForm(props) {
  let [title, setTitle] = useState();
  
  
  const showHideClassName = props.showDelete
    ? "modal display-block"
    : "modal display-none";

  const handleChangeTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  
  
  const handleSubmit = e => {
    e.preventDefault();

     props.deleteIdea(title);
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modalhead">Delete Idea!</div>
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
            <button className="sumbitbtn">Submit</button>
          </div>
        </form>
        <button onClick={props.hideDeleteModal} className="closebtn">
          close
        </button>
      </section>
    </div>
  );
}

export default DeleteForm;
