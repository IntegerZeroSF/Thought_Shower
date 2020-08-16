import React, { useState } from "react"
import './InputForm.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function InputForm(props) {
  let [title, setTitle] = useState()
  let [category, setCategory] = useState()
  let [post, setPost] = useState()

  const showHideClassName = props.showInput
    ? "modal display-block"
    : "modal display-none"

  const handleChangeTitle = e => {
    e.preventDefault()
    setTitle(e.target.value)
  }
  const handleChangeCategory = e => {
    e.preventDefault()
    setCategory(e.target.value)
  }
  const handleChangePost = e => {
    e.preventDefault()
    setPost(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const Idea = {
      user: props.user ? props.user.name : 'anonymous',
      uid: props.user ? props.user._id : '',
      title: title,
      category: category,
      post: post
    }
    props.createIdea(Idea)
    props.hideInputModal()

  }
  return (
    <div className={showHideClassName}>
      <Card className='modal-main'>
        <Card.Title className='modalHead'>Create a New Idea!</Card.Title>
        <Card.Body>
          <form className='inputform' onSubmit={handleSubmit}>
            <div>
              <input
                className="f-input"
                value={title}
                type="text"
                placeholder="Idea Name"
                required="required"
                onChange={handleChangeTitle}
              ></input>
            </div>
            <div>
              <input
                className="f-input"
                value={category}
                type="text"
                placeholder="Category"
                required="required"
                onChange={handleChangeCategory}
              ></input>
            </div>
            <div>
              <textarea
                className="f-input description"
                value={post}
                type="text"
                placeholder="Description"
                required="required"
                onChange={handleChangePost}
              ></textarea>
            </div>

            <div>
              <Button type='Submit' className='sumbitbtn'>Submit</Button>
            </div>
          </form>
        </Card.Body>
        <Button onClick={props.hideInputModal} className='closeCreateBtn'>
          Close
        </Button>
      </Card>
    </div>
  )
}

export default InputForm
