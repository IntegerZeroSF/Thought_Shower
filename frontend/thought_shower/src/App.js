import React, { useState, useEffect } from "react";
import "./App.css";

import InputForm from "./components/InputForm";
import DeleteForm from "./components/DeleteForm";
import UpdateForm from "./components/UpdateForm";
import { Link, Route } from "react-router-dom";
import Home from './components/Home/Home.js'

function App() {
    let [data, setData] = useState();
    let [showInput, setShowInput] = useState(false);
    let [showDelete, setShowDelete] = useState(false);
    let [showUpdate, setShowUpdate] = useState(false);
    

    const showInputModal = () => {
      setShowInput(true);
    };
    const hideInputModal = () => {
      setShowInput(false);
    };
  
    const showDeleteModal = () => {
      setShowDelete(true);
    };
    const hideDeleteModal = () => {
      setShowDelete(false);
    };
  
    const showUpdateModal = () => {
      setShowUpdate(true);
    };
    const hideUpdateModal = () => {
      setShowUpdate(false);
    };
  
    let dataUrl = "http://localhost:4000/ideas/";
  
    useEffect(() => {
      fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
          setData(data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
  
    const createIdea = Idea => {
      fetch((dataUrl), {
        body: JSON.stringify(Idea),
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      }).then(createdIdea => createdIdea.json());
      data.push(Idea);
    };
  
    const deleteIdea = title => {
      let dataUrl1=dataUrl+"title/"+title
      console.log(dataUrl1)
      fetch(dataUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data._id);
   
      let dataUrl2=dataUrl+"id/"+data._id
      fetch((dataUrl2), {
        body: JSON.stringify(),
        method: "delete",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      }).then(deleteIdea => deleteIdea.json());
      //  data.push(Recipe)
      
       })
    .catch(err => {
      console.log(err);
    });
  }

  const updateIdea = title => {
    let dataUrl1=dataUrl+"title/"+title
    console.log(dataUrl1)
    fetch(dataUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data._id);
 
    let dataUrl2=dataUrl+"id/"+data._id
    fetch((dataUrl2), {
      body: JSON.stringify(),
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(updateIdea => updateIdea.json());
    //  data.push(Recipe)
    
     })
  .catch(err => {
    console.log(err);
  });
}

    return (
      <div>
        <header className="header">
          <Link to="/" className="link">
            Thought Shower
          </Link>
        </header>
        <main>
          <div className="body">
            <div></div>
            <div>
              <InputForm
                showInput={showInput}
                hideInputModal={hideInputModal}
                createIdea={createIdea}
              >
                <p>Modal</p>
              </InputForm>
              <button
                className="createbtn"
                type="button"
                onClick={showInputModal}
              >
                Create an Idea
              </button>
            </div>
            <div>
            <DeleteForm
              showDelete={showDelete}
              hideDeleteModal={hideDeleteModal}
              deleteIdea={deleteIdea}
            >
              <p>Modal</p>
            </DeleteForm>
            <button
              className="createbtn"
              type="button"
              onClick={showDeleteModal}
            >
              Delete an Idea
            </button>
          </div><div>
            <UpdateForm
              showUpdate={showUpdate}
              hideUpdateModal={hideUpdateModal}
              updateIdea={updateIdea}
              data={data}
            >
              <p>Modal</p>
            </UpdateForm>
            <button
              className="createbtn"
              type="button"
              onClick={showUpdateModal}
            >
              Update an Idea
            </button>
          </div>
            <div className="body">
              <Home data={data} />
              <Route exact path="/" component={Home} />
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default App;
