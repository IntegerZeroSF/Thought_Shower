import React, { useState } from "react";
import "../Header/Header.css";
import InputForm from "../Create/InputForm";

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
    <div>
      <nav>
        <InputForm
          showInput={showInput}
          hideInputModal={hideInputModal}
          createIdea={props.createIdea}
        >
          <p>Modal</p>
        </InputForm>
        <Nav.Link className="navbtn" type="button" onClick={showInputModal}>
          Create
        </Nav.Link>
      </nav>
    </div>
  );
}

export default CreateBtn;
