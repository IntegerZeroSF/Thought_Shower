import React, { useState } from "react"

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function DeleteForm(props) {
  const showHideClassName = props.showDelete
    ? "modal display-block"
    : "modal display-none"

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleDelete = e => {
    e.preventDefault()
    props.deleteIdea(props.id)
    props.hideDeleteModal()
  }
  return (
    <div className={showHideClassName}>
      <Alert className='modal-main'>
        <div className='modalhead'>Are you sure you want to delete?</div>
        <form className='inputform' onSubmit={e => handleSubmit(e)}>
        <br />
          <ButtonGroup>
            <Button variant='danger' className='sumbitbtn' onClick={e => handleDelete(e)}>
              Yes
            </Button>
            <Button onClick={props.hideDeleteModal} className='closebtn' style={{marginLeft: "20px"}}>
              No
            </Button>
          </ButtonGroup>
        </form>
      </Alert>
    </div>
  )
}

export default DeleteForm
