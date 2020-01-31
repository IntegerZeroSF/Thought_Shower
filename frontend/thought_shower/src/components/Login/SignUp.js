import React, { useState } from 'react'
import './SignUp.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function SignUp(props) {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPass] = useState('')
    let [confirm, setConfirm] = useState('')

    const handleNameChange = e => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        e.preventDefault()
        setPass(e.target.value)
    }

    const handleConfirmChange = e => {
        e.preventDefault()
        setConfirm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (password === confirm) {
            const user = {
                name,
                email,
                password
            }
            props.handleSignUp(user)
        } else {
            alert('passwords do no match')
        }
    }

    if (props.user) props.history.push('/')

    return (
        <div className="signUpDiv">
            <Card>
            <Card.Header as="h1">Sign up</Card.Header>
            <form onSubmit={handleSubmit} className="signUpForm">
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    required="required"
                    autoComplete="off"
                    onChange={handleNameChange}
                />
                <br/>
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
                <input 
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    value={confirm}
                    required="required"
                    onChange={handleConfirmChange}
                />
                <br/>
                <Button type="Submit" className="signUpButton">Submit</Button>
            </form>
            </Card>
        </div>
    )
}