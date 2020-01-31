import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import InputForm from "./components//Create/InputForm";
// import DeleteForm from "./components//Delete/DeleteForm";
// import UpdateForm from "./components/Update/UpdateForm";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header.js";
import IdeaList from "./components/TitleView/IdeaList.js";
import AboutUs from "./components/About Us/About Us.js"
import {Helmet} from "react-helmet";
import FullCard from './components/FullCard/FullCard'

import axios from 'axios'

function App() {
  let [data, setData] = useState();
  let [redirect, setRedirect] = useState('')

  let dataUrl = "http://localhost:4000/ideas";

  useEffect(() => {
    axios.get(dataUrl)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  }, []);

  const createIdea = Idea => {
    axios.post(dataUrl, Idea)
      .then(ideas => {
        let newData = ideas
        setData(newData)
      })
      .catch(err => console.log(err))
  };

  const deleteIdea = id => {
    axios.delete(dataUrl + '/id/' + id)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  };

  const updateIdea = (id, idea) => {
    axios.put(dataUrl + '/id/' + id, idea)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  };

  // console.log(data)
  return (
    <div>
    <Helmet><title>Thought Shower</title></Helmet>
      <header className="header">
        <div>
          <Header createIdea={createIdea} />
        </div>
      </header>
      <main>
        <Route
          exact
          path="/"
          render={() => <Home createIdea={createIdea} />}
        />
        <Route path="/ideas"
          render={() => <IdeaList data={data}
            updateIdea={updateIdea}
            deleteIdea={deleteIdea} />}
        />
        <Route path="/aboutus"
          render={() => <AboutUs />} />
        <Route path="/fullview/:id"
          render={props => <FullCard {...props}/>} />
      </main>
    </div>
  );
}

export default App;
