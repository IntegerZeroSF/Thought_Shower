import React, { useState } from "react";

function DeleteForm(props) {
  let [title, setTitle] = useState(props.title);

  const showHideClassName = props.showDelete
    ? "modal display-block"
    : "modal display-none";

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleDelete = e => {
    e.preventDefault()
    props.deleteIdea(props.id);
    props.hideDeleteModal()
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modalhead">Are you sure you want to delete?</div>
        <form className="inputform" onSubmit={e => handleSubmit(e)}>
          <button className="sumbitbtn" onClick={e => handleDelete(e)}>
            Yes
          </button>
          <button onClick={props.hideDeleteModal} className="closebtn">
            No
          </button>
        </form>
      </section>
    </div>
  );
}

export default DeleteForm;
