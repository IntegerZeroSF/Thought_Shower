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
    if (data) {
        const id = props.match.params.card
        const card = data ? data.data.filter(arr => arr._id === id) : 0
        const { user, title, category, post, comments } = card ? card[0] : 0
        return (
            <div>
                <h1>{title}</h1>
                <p>{post}</p>
                <h1>hello</h1>
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )

}