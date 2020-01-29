import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import InputForm from "./components//Create/InputForm";
import DeleteForm from "./components//Delete/DeleteForm";
import UpdateForm from "./components/Update/UpdateForm";
import { Link, Route } from "react-router-dom";
import Home from './components/Home/Home.js'
import Header from './components/Header/Header.js'


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
        .then(ideaData => {
          setData(ideaData);
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
      fetch(dataUrl1)
      .then(res => res.json())
      .then(ideaData => {
        console.log(ideaData);
   
      let dataUrl2=dataUrl+"id/"+ideaData._id
      fetch((dataUrl2), {
        body: JSON.stringify(),
        method: "delete",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      }).then(deleteIdea => deleteIdea.json());
        data.pop(ideaData.id)
        console.log(data)
      
       })
    .catch(err => {
      console.log(err);
    });
  }

  const updateIdea = idea => {
    let dataUrl1=dataUrl+"title/"+idea.title
    console.log(dataUrl1)
    fetch(dataUrl1)
    .then(res => res.json())
    .then(ideaData => {
      console.log(ideaData);
 
    let dataUrl2=dataUrl+"id/"+ideaData._id
    fetch((dataUrl2), {
      body: JSON.stringify(idea),
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(updateIdea => updateIdea.json());
      console.log(data)
        let n = data.indexOf(`_id=ideaData._id`)
        console.log(n)
        // data[n].category = idea.category



        data.forEach((item)=>{
        if(item._id === ideaData._id){
          console.log(item)
          data.category = idea.category
          console.log(idea.category)
        }
       
      })
      console.log(data)
    
     })
  .catch(err => {
    console.log(err);
  });
}

    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
  
  export default App;
