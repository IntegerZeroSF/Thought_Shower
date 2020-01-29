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
    axios.post(dataUrl, Idea)
      .then(ideas => {
        let newData = ideas
        setData(newData)
      })
  };

  const deleteIdea = title => {
    let dataUrl1 = dataUrl + "title/" + title;
    console.log(dataUrl1);
    fetch(dataUrl1)
      .then(res => res.json())
      .then(ideaData => {
        console.log(ideaData);

        let dataUrl2 = dataUrl + "id/" + ideaData._id;
        fetch(dataUrl2, {
          body: JSON.stringify(),
          method: "delete",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        }).then(deleteIdea => deleteIdea.json());
        let newData = data
        newData.pop(ideaData.id);
        setData(newData)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateIdea = idea => {
    let dataUrl1 = dataUrl + "title/" + idea.title;
    console.log(dataUrl1);
    fetch(dataUrl1)
      .then(res => res.json())
      .then(ideaData => {
        console.log(ideaData);

        let dataUrl2 = dataUrl + "id/" + ideaData._id;
        fetch(dataUrl2, {
          body: JSON.stringify(idea),
          method: "put",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        }).then(updateIdea => updateIdea.json());
        console.log(data);
        let n = data.indexOf(`_id=ideaData._id`);
        console.log(n);
        // data[n].category = idea.category

        data.forEach(item => {
          if (item._id === ideaData._id) {
            console.log(item);
            data.category = idea.category;
            console.log(idea.category);
          }
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
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
              path="/:thoughts"
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
