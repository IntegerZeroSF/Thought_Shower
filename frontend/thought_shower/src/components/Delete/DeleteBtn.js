import React, { useState } from "react";
import "../Header/Header.css";
import DeleteForm from "../Delete/DeleteForm";

function DeleteBtn() {
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
              deleteIdea={deleteIdea}
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
