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
import { Helmet } from "react-helmet";
import FullCard from './components/FullCard/FullCard'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'

import axios from 'axios'

function App() {
  let [data, setData] = useState()
  let [isLoggedIn, setLogin] = useState(false)
  let [user, setUser] = useState()

  let dataUrl = "http://localhost:4000/ideas";

  useEffect(() => {
    if (localStorage.token) {
      axios.get('http://localhost:4000/auth/user', {
            headers: {
                "x-auth-token": localStorage.token
            }
        }).then(res => {
            setLogin(true)
            setUser(res.data)
        })
    }

    axios.get(dataUrl)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  }, []);

  const handleLogin = user => {
    axios.post('http://localhost:4000/auth', user)
      .then(res => {
        localStorage.token = res.data.token
        setLogin(true)
        setUser(res.data.user)
      }).catch(err => console.log(err))
  }

  const handleSignUp = user => {
    axios.post('http://localhost:4000/users', user)
      .then(res => {
        localStorage.token = res.data.token
        setLogin(true)
        setUser(res.data.user)
      }).catch(err => console.log(err))
  }

  const handleLogout = () => {
    localStorage.clear()
    setLogin(false)
    setUser()
  }

  const createIdea = idea => {
    console.log(idea)
    setData()
    axios.post(dataUrl, idea)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  };

  const deleteIdea = id => {
    setData()
    axios.delete(dataUrl + '/id/' + id)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  };

  const updateIdea = (id, idea) => {
    setData()
    axios.put(dataUrl + '/id/' + id, idea)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  };

  if (!isLoggedIn && user) setUser()

  return (
    <div>
      <Helmet><title>Thought Shower</title></Helmet>
      <header className="header">
        <div>
          <Header user={user} createIdea={createIdea} handleLogout={handleLogout} />
        </div>
      </header>
      <main>
        <Route
          exact
          path="/"
          render={() => <Home user={user} createIdea={createIdea} />}
        />
        <Route path="/ideas"
          render={() => <IdeaList 
            user={user}
            data={data}
            updateIdea={updateIdea}
            deleteIdea={deleteIdea} />}
        />
        <Route path="/aboutus"
          render={() => <AboutUs />} />
        <Route path="/fullview/:id"
          render={props => <FullCard user={user} {...props} />} />
        <Route path="/login"
          render={() => <Login handleLogin={handleLogin} />} />
        <Route path="/signup"
          render={() => <SignUp handleSignUp={handleSignUp} />} />
      </main>
    </div>
  );
}

export default App;
