import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Route } from "react-router-dom"
import Home from "./components/Home/Home.js"
import Header from "./components/Header/Header.js"
import IdeaList from "./components/TitleView/IdeaList.js"
import AboutUs from "./components/About Us/About Us.js"
import { Helmet } from "react-helmet"
import FullCard from './components/FullCard/FullCard'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'

import axios from 'axios'

function App() {
  let [data, setData] = useState()
  let [isLoggedIn, setLogin] = useState(false)
  let [user, setUser] = useState()

  const dataURL = "https://thought-shower.herokuapp.com"

  useEffect(() => {
    if (localStorage.token) {
      axios.get(dataURL + '/auth/user', {
        headers: {
          "x-auth-token": localStorage.token
        }
      }).then(res => {
        setLogin(true)
        setUser(res.data)
      })
    }

    axios.get(dataURL + '/ideas')
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  }, [])

  const handleLogin = user => {
    axios.post(dataURL + '/auth', user)
      .then(res => {
        localStorage.token = res.data.token
        setLogin(true)
        setUser(res.data.user)
      }).catch(err => console.log(err))
  }

  const handleSignUp = user => {
    const name = user.name.split(' ').map(arr => {
      let word = arr.charAt(0).toUpperCase()
      for (let i = 1; i < arr.length; i++) {
        word += arr.charAt(i).toLowerCase()
      }
      return word
    })
    user.name = name.join(' ')
    axios.post(dataURL + '/users', user)
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
    setData()
    axios.post(dataURL + '/ideas', idea)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  }

  const deleteIdea = id => {
    setData()
    axios.delete(dataURL + '/ideas/id/' + id)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  }

  const updateIdea = (id, idea) => {
    setData()
    axios.put(dataURL + '/ideas/id/' + id, idea)
      .then(ideas => {
        setData(ideas)
      })
      .catch(err => console.log(err))
  }

  if (!isLoggedIn && user) setUser()

  return (
    <div className="App">
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
          render={props => <Login {...props} user={user} handleLogin={handleLogin} />} />
        <Route path="/signup"
          render={props => <SignUp {...props} user={user} handleSignUp={handleSignUp} />} />
      </main>
    </div>
  )
}

export default App
