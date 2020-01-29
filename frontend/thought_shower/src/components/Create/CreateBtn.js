import React, { useState } from "react";

import InputForm from "../Create/InputForm";
import Button from "react-bootstrap/Button";

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
        <Button variant="primary" block onClick={showInputModal}>
          Create
        </Button>
      </nav>
    </div>
  );
}

export default CreateBtn;
