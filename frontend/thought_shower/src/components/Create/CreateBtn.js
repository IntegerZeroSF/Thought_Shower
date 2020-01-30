import React, { useState } from "react";

import InputForm from "../Create/InputForm";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CreateBtn(props) {
  let [showInput, setShowInput] = useState(false);
  const showInputModal = () => {
    setShowInput(true);
  };
  const hideInputModal = () => {
    setShowInput(false);
  };

  return (
      <>
        <InputForm
          showInput={showInput}
          hideInputModal={hideInputModal}
          createIdea={props.createIdea}
        >
          <p>Modal</p>
        </InputForm>
        <Button className="navBTN"  onClick={showInputModal} variant="primary" block>
          Create
        </Button>
      </>
  );
}

export default CreateBtn;
