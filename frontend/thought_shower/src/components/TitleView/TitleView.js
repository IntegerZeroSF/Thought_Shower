import React, { useState, useEffect } from 'react';
import './TitleView.css';
import UpdateBtn from '../Update/UpdateBtn';
import DeleteBtn from '../Delete/DeleteBtn';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

// const axios = require('axios').default;
// const URL = 'https://thought-shower.herokuapp.com'

function TitleView(props) {
  let [showIdea, setShowIdea] = useState(false);

  const showIdeaModal = () => {
    setShowIdea(true);
  };
  const hideIdeaModal = () => {
    setShowIdea(false);
  };

  const newTitle = []
  if (props.title) {
    for (let i = 0; i < props.title.length; i++) {
      i ? newTitle.push(props.title.charAt(i).toLowerCase()) : newTitle.push(props.title.charAt(i).toUpperCase())
    }
    newTitle.join('')
  }

  return (
    <Card className='container' style={{ padding: '0' }}>
      <Card.Header as='h1'>{newTitle}</Card.Header>

      <Card.Body>
        <Card.Title as='h2'>{props.category}</Card.Title>
        <ButtonGroup className='flexit btn-group'>
          <UpdateBtn id={props.id}
            title={props.title}
            category={props.category}
            post={props.post}
            updateIdea={props.updateIdea} />
          <DeleteBtn id={props.id}
            title={props.title}
            deleteIdea={props.deleteIdea} />

        </ButtonGroup>
      </Card.Body>

      <Card.Footer className='flexit'>
        <Button href={'/fullview/' + props.id} className='btn-link'>View Card</Button>
        <div className='button-container'>
          <span className={'like-count ' + props.color}>{props.likes}</span>
          <button className='like-button upvote'>
            <img src='/thumbs_up.png' className='like' />
          </button>
          <button className='like-button downvote'>
            <img src='/thumbs_down.png' className='like' />
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default TitleView;
