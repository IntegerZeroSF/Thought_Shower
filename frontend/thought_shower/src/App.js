import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import InputForm from "./components//Create/InputForm";
import DeleteForm from "./components//Delete/DeleteForm";
import UpdateForm from "./components/Update/UpdateForm";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header.js";
import IdeaList from "./components/TitleView/IdeaList";

import axios from 'axios'

function App() {
  let [data, setData] = useState();

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

  console.log(data)
  return (
    <div>
      <header className="header">
        <div>
          <Header createIdea={createIdea} />
        </div>
      </header>
      <main>
        <div>
          <div className="body">
            <Route
              exact
              path="/"
              render={() => <Home createIdea={createIdea} />}
            />
          </div>
          <div>
            <Route
              path="/ideas"
              render={() => (
                <IdeaList
                  data={data}
                  updateIdea={updateIdea}
                  deleteIdea={deleteIdea}
                />
              )}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
