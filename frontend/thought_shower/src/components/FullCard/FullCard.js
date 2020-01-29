import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FullCard(props) {
    let [data, setData] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/ideas")
            .then(res => {
                setData(res)
            })
    }, [])

    // data ? console.log(data.data) : console.log('not happening')
    const id = props.match.params.card
    const card = data ? data.data.filter(arr => arr._id === id) : 0
    const { user, title, category, post, comments } = card ? card[0] : 0

const commentList = comments 
    ? comments.map(com => {
        return (
            <div>
                <h5>{com.user}</h5>
                <p>{com.message}</p>

            </div>
        )}) 
    : ''

    return (
        <div>
            <h1>{user}</h1>
            <h2>{title}</h2>
            <p>{post}</p>
            <div>
                {commentList}
            </div>
        </div>
    )
}