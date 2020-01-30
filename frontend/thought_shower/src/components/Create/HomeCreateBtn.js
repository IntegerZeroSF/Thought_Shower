import React, { useState } from "react";
import "../Header/Header.css";
import InputForm from "../Create/InputForm";

function HomeCreateBtn(props) {
    let [showInput, setShowInput] = useState(false);

    const showInputModal = () => {
        console.log('here')
        setShowInput(true);
    };
    const hideInputModal = () => {
        setShowInput(false);
    };

    return (
        <>
            <div onClick={showInputModal}>
                Create
            </div>
            <InputForm
                user={props.user}
                showInput={showInput}
                hideInputModal={hideInputModal}
                createIdea={props.createIdea}
            >
                <p>Modal</p>
            </InputForm>
        </>
    );
}

export default HomeCreateBtn;
