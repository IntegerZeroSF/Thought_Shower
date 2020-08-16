import React, { useState } from "react"
import "../Header/Header.css"
import InputForm from "../Create/InputForm"
import Button from 'react-bootstrap/Button'

function HomeCreateBtn(props) {
    let [showInput, setShowInput] = useState(false)

    const showInputModal = () => {
        setShowInput(true)
    }
    const hideInputModal = () => {
        setShowInput(false)
    }

    return (
        <>
            <Button variant="primary" onClick={showInputModal} block>Create</Button>
            <InputForm
                user={props.user}
                showInput={showInput}
                hideInputModal={hideInputModal}
                createIdea={props.createIdea}
            >
                <p>Modal</p>
            </InputForm>
        </>
    )
}

export default HomeCreateBtn
