import React, { useState } from 'react';
import './TitleView.css';
import UpdateBtn from '../Update/UpdateBtn';
import DeleteBtn from '../Delete/DeleteBtn';
import axios from 'axios'

import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

//VARIABLE DEFINITIONS:
//  props.id        =>  The _id of the idea object
//  uid             =>  The _id of the user who posted the idea
//  props.user._id  =>  The _id of the user that's currently signed in

function TitleView(props) {
  let [data, setData] = useState(props.data)
  let [green, setGreen] = useState(false)
  let [red, setRed] = useState(false)

  const { uid, title, post, category, likes, likedBy } = data

  const newTitle = []
  if (title) {
    for (let i = 0; i < title.length; i++) {
        i ? newTitle.push(title.charAt(i).toLowerCase()) : newTitle.push(title.charAt(i).toUpperCase())
    }
    newTitle.join('')
  }
  newTitle.join('')

  const handleLike = () => {
    if (props.user) {
      axios.post("http://localhost:4000/ideas/likes/" + props.id + "/true", props.user)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } else {
      alert('You must login to like something!')
    }
  }

  const handleDislike = () => {
    if (props.user) {
      axios.post("http://localhost:4000/ideas/likes/" + props.id + "/false", props.user)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } else {
      alert('You must login to like something!')
    }
  }

  const filter = props.user && likedBy ? likedBy.filter(arr => arr.id === props.user._id) : []
  if (filter.length) {
    if (filter[0].liked && !green) {
      setGreen(true)
      setRed(false)
    } else if (!filter[0].liked && !red) {
      setRed(true)
      setGreen(false)
    }
  }

  const color = likes
    ? (likes >= 0 ? "green" : "red")
    : 'black'

  return (
    <Card className='container' style={{ padding: '0' }}>
      <Card.Header as='h1'>{newTitle}</Card.Header>

      <Card.Body>
        <Card.Title as='h2'>{category}</Card.Title>
        <ButtonGroup className='flexit btn-group'>
          <UpdateBtn id={props.id}
            title={newTitle}
            category={category}
            post={post}
            updateIdea={props.updateIdea} />
          <DeleteBtn id={props.id}
            title={title}
            deleteIdea={props.deleteIdea} />

        </ButtonGroup>
      </Card.Body>

      <Card.Footer className='flexit'>
        <Button href={'/fullview/' + props.id} className='btn-link'>View Card</Button>
        <div className='button-container'>
          <span className={'like-count ' + color}>{likes}</span>
          <button className={green ? 'like-button upvote-selected' : 'like-button upvote'} onClick={handleLike}>
            <img src='/thumbs_up.png' className='like' />
          </button>
          <button className={red ? 'like-button downvote-selected' : 'like-button downvote'} onClick={handleDislike}>
            <img src='/thumbs_down.png' className='like' />
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default TitleView;
