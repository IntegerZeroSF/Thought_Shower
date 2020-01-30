import React, { useState } from 'react'

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

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />
                <br/>
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <br/>
                <input 
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassChange}
                />
                <br/>
                <input 
                    type="text"
                    name="confirm"
                    placeholder="Confirm"
                    value={confirm}
                    onChange={handleConfirmChange}
                />
                <br/>
                <input type="Submit"/>
            </form>
        </div>
    )
}