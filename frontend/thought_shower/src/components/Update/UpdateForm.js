import React, { useState } from "react"
import "./UpdateForm.css"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function UpdateForm(props) {
  let [title, setTitle] = useState(props.title)
  let [category, setCategory] = useState(props.category)
  let [post, setPost] = useState(props.post)
  
  const showHideClassName = props.showUpdate
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

    const idea = {
      title: title,
      category: category,
      post: post
    }

    props.updateIdea(props.id, idea)
    props.hideUpdateModal()
   
  }

   return (
    <div className={showHideClassName}>
      <Card className="modal-main">
        <Card.Title className="modalHead">Update an Idea!</Card.Title>
        <Card.Body>
        <form className="updateform" onSubmit={e => handleSubmit(e)}>
          <div>
            <input
              className="input"
              value={title}
              type="text"
              placeholder="Idea Name"
              required="required"
              onChange={handleChangeTitle}
            ></input>
          </div>
          <div>
            <input
              className="input"
              value={category}
              type="text"
              placeholder="Category"
              required="required"
              onChange={handleChangeCategory}
            ></input>
          </div>
          <div>
            <textarea
              className="input description"
              value={post}
              type="text"
              placeholder="Description"
              required="required"
              onChange={handleChangePost}
            ></textarea>
          </div>

          <div>
            <Button type="Submit" className="sumbitbtn">Submit</Button >
          </div>
        </form>
        </Card.Body>
        <Button onClick={props.hideUpdateModal} className="closeCreateBtn">
          Close
        </Button>
      </Card>
    </div>
  )
}

export default UpdateForm
