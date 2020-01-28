import React, { useState } from "react";
import "../Header/Header.css";
import InputForm from "../Create/InputForm";

function CreateBtn() {
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
          // createIdea={createIdea}
        >
          <p>Modal</p>
        </InputForm>
        <button className="navbtn" type="button" onClick={showInputModal}>
          Create
        </button>
      </nav>
    </div>
  );
}

export default CreateBtn;
