import React, { useState } from "react";
import "../Header/Header.css";
import UpdateForm from "./UpdateForm";

function UpdateBtn(props) {
  let [showUpdate, setShowUpdate] = useState(false);

  const showUpdateModal = () => {
    setShowUpdate(true);
  };
  const hideUpdateModal = () => {
    setShowUpdate(false);
  };

  return (
     <div>
            <UpdateForm
              showUpdate={showUpdate}
              hideUpdateModal={hideUpdateModal}
              updateIdea={props.updateIdea}
              id = {props.id}
              title={props.title}
              category={props.category}
              post={props.post}
            >
              <p>Modal</p>
            </UpdateForm>
            <button
              className="createbtn"
              type="button"
              onClick={showUpdateModal}
            >
              Update an Idea
            </button>
          </div>
  );
}

export default UpdateBtn;
