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
            <Button className='sumbitbtn' onClick={e => handleDelete(e)}>
              Yes
            </Button>
            <Button variant='danger' onClick={props.hideDeleteModal} className='closebtn'>
              No
            </Button>
          </ButtonGroup>
        </form>
      </Alert>
    </div>
  )
}

export default DeleteForm
