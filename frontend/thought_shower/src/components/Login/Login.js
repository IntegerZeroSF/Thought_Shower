import React, { useState } from 'react'
import './Login.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Login(props) {
    let [email, setEmail] = useState('')
    let [password, setPass] = useState('')

    const handleEmailChange = e => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        e.preventDefault()
        setPass(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        props.handleLogin(user)
    }

    if (props.user) props.history.push('/')

    return (
        <div>
            <Card className="loginDiv">
            <Card.Header as="h1">Login</Card.Header>
            <form onSubmit={handleSubmit} className="loginForm">
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    required="required"
                    autoComplete="off"
                    onChange={handleEmailChange}
                />
                <br/>
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    required="required"
                    onChange={handlePassChange}
                />
                <br/>
                <Button type="Submit" className="loginButton">Login</Button>
            </form>
            </Card>
        </div>
    )
}