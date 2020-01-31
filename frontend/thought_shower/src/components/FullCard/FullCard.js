import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./FullCard.css"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function FullCard(props) {
    let [data, setData] = useState()
    let [newComment, setNewComment] = useState('')
    let [green, setGreen] = useState(false)
    let [red, setRed] = useState(false)

    const id = props.match.params.id
    const dataURL = "https://thought-shower.herokuapp.com"

    useEffect(() => {
        axios.get(dataURL + "/ideas/id/" + id)
            .then(res => {
                setData(res)
            })
    }, [])

    const card = data
    const { user, category, title, post, comments, likes, likedBy } = card ? card.data : 0
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
        const name = props.user ? props.user.name : 'anonymous'
        axios.post(dataURL + "/ideas/comments/" + id,
            {
                user: name,
                message: newComment
            }).then(res => {
                setData(res)
                setNewComment('')
            })
    }

    const handleLike = () => {
        if (props.user) {
            axios.post(dataURL + "/ideas/likes/" + id + "/true", props.user)
                .then(res => setData(res))
                .catch(err => console.log(err))
        } else {
            alert('You must login to like something!')
        }
    }

    const handleDislike = () => {
        if (props.user) {
            axios.post(dataURL + "/ideas/likes/" + id + "/false", props.user)
                .then(res => setData(res))
                .catch(err => console.log(err))
        } else {
            alert('You must login to like something!')
        }
    }

    const filter = card && props.user ? card.data.likedBy.filter(arr => arr.id === props.user._id) : false
    if (filter.length) {
        if (filter[0].liked && !green) {
            setGreen(true)
            setRed(false)
        } else if (!filter[0].liked && !red) {
            setRed(true)
            setGreen(false)
        }
    }

    const color = likes
        ?   (likes >= 0 ? "green" : "red")
        :   'black'

    const commentList = comments
        ? comments.map(com => {
            return (
                <Card className='commentsDiv'>
                    <Card.Header as="h3">{com.user}</Card.Header>
                    <Card.Body>{com.message}</Card.Body>
                </Card>
            )
            })
        : ''

    return (
        <div className='fullCardBody'>
            <Card className='fullCardCard'> 
                {/* <h1>{user}</h1> */}
                <Card.Header as="h1">{newTitle}</Card.Header>
                <Card.Title as="h2" className='fullViewCard'>{user}</Card.Title>
                <Card.Title as="h3" className='fullViewCard'>Category: {category}</Card.Title>
                <p className='fullViewDescrip'>{post}</p>

                <Card.Footer className='button-container-full-view'>
                    <span className={'like-count ' + color}>{likes}</span>
                    <button className={green ? 'like-button upvote-selected' : 'like-button upvote'} onClick={handleLike}>
                        <img src='/thumbs_up.png' className='like' />
                    </button>
                    <button className={red ? 'like-button downvote-selected' : 'like-button downvote'} onClick={handleDislike}>
                        <img src='/thumbs_down.png' className='like' />
                    </button>
                </Card.Footer>
            </Card>
            <br/>
            <br/>
            <div>
                {commentList}
            </div>
            <div className='commitForm'>
                <form onSubmit={submitComment}>
                    <textarea
                        type="text"
                        placeholder="Write a comment"
                        value={newComment}
                        onChange={updateComment}
                    />
                    <br />
                    <Button type="Sumbit">Submit</Button>
                </form>
            </div>
        </div>
    )
}