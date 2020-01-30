import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FullCard(props) {
    let [data, setData] = useState()
    let [newComment, setNewComment] = useState('')
    let [green, setGreen] = useState(false)
    let [red, setRed] = useState(false)
    const id = props.match.params.id

    useEffect(() => {
        axios.get("http://localhost:4000/ideas/id/" + id)
            .then(res => {
                setData(res)
            })
    }, [])

    const card = data
    const { user, category, title, post, comments, likes, favorites } = card ? card.data : 0
    const newTitle = []

    if (title) {
        for (let i = 0; i < title.length; i++) {
            i ? newTitle.push(title.charAt(i).toLowerCase()) : newTitle.push(title.charAt(i).toUpperCase())
        }
        newTitle.join('')
    }


    const updateComment = e => {
        e.preventDefault()
        setNewComment(e.target.value)
    }


    const submitComment = e => {
        e.preventDefault()
        axios.post("http://localhost:4000/ideas/comments/" + id,
            {
                user,
                message: newComment
            }).then(res => {
                setData(res)
                setNewComment('')
            })
    }

    const handleLike = e => {

    }

    const color = likes
        ?   (likes >= 0 ? "green" : "red")
        :   'black'

    const commentList = comments
        ? comments.map(com => {
            return (
                <div>
                    <h5>{com.user}</h5>
                    <p>{com.message}</p>

                </div>
            )
        })
        : ''

    return (
        <div>
            <h1>{user}</h1>
            <h2>{newTitle}</h2>
            <h3>{category}</h3>
            <p>{post}</p>

            <div className="button-container">
                <span className={"like-count " + color}>{likes}</span>
                <button className="like-button upvote">
                    <img src="/thumbs_up.png" className="like" />
                </button>
                <button className="like-button downvote">
                    <img src="/thumbs_down.png" className="like" />
                </button>
            </div>

            <div>
                {commentList}
            </div>

            <form onSubmit={submitComment}>
                <textarea
                    type="text"
                    placeholder="Write a comment"
                    value={newComment}
                    onChange={updateComment}
                />
                <br />
                <button type="Sumbit">Submit</button>
            </form>
        </div>
    )
}