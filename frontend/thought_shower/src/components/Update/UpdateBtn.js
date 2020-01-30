import React, { useState } from "react";
import "../Header/Header.css";
import UpdateForm from "./UpdateForm";

// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

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
            <Button
              className="createbtn"
              type="button"
              onClick={showUpdateModal}
            >
              Update Idea
            </Button>
          </div>
  );
}

export default UpdateBtn;
