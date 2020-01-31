import React, { useState } from 'react'

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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <br/>
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handlePassChange}
                />
                <br/>
                <input type="Submit"/>
            </form>
        </div>
    )
}