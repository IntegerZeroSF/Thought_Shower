import React, { useState } from "react";
import "../Header/Header.css";
import DeleteForm from "./DeleteForm";

function DeleteBtn(props) {
  let [showDelete, setShowDelete] = useState(false);

  const showDeleteModal = () => {
    setShowDelete(true);
  };
  const hideDeleteModal = () => {
    setShowDelete(false);
  };

  return (
    <div>
            <DeleteForm
              showDelete={showDelete}
              hideDeleteModal={hideDeleteModal}
              deleteIdea={props.deleteIdea}
              id={props.id}
              title={props.title}
            >
              <p>Modal</p>
            </DeleteForm>
            <button
              className="createbtn"
              type="button"
              onClick={showDeleteModal}
            >
              Delete an Idea
            </button>
          </div>
  );
}

export default DeleteBtn;
