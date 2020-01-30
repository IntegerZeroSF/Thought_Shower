import React, { useState } from 'react';
import '../Header/Header.css';
import DeleteForm from './DeleteForm';

import Button from 'react-bootstrap/Button';


function DeleteBtn(props) {
  let [showDelete, setShowDelete] = useState(false);

  const showDeleteModal = () => {
    setShowDelete(true);
  };
  const hideDeleteModal = () => {
    setShowDelete(false);
  };

  return (
    <div>
            <DeleteForm
              showDelete={showDelete}
              hideDeleteModal={hideDeleteModal}
              deleteIdea={props.deleteIdea}
              id={props.id}
              title={props.title}
            >
              <p>Modal</p>
            </DeleteForm>
            <Button
              className='createbtn'
              type='button'
              onClick={showDeleteModal}
            >
              Delete Idea
            </Button>
          </div>
  );
}

export default DeleteBtn;
