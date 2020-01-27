import React from 'react'
import './TitleView.css'

const axios = require('axios').default;
const URL = 'https://thought-shower.herokuapp.com'

export default class TitleView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ideas: []
        }
    }
    componentDidMount() {
        axios.get(URL + '/ideas')
            .then(res => {
                this.setState({
                    ideas: res.data
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        const ideas = this.state.ideas.map(arr => {
            const color = arr.likes >= 0 ? (arr.likes > 0 ? "green" : "black") : "red"
            return (
                <div className="container">
                    <h1 style={{textAlign: "left"}}>{arr.title}</h1>
                    <h2 style={{textAlign: "left"}}>{arr.category}</h2>
                    <button className='view-details'>View Details</button>
                    <div className='button-container'>
                        <span className={'like-count ' + color}>{arr.likes}</span>
                        <button className="like-button upvote"><img src='thumbs_up.png' className='like'/></button>
                        <button className="like-button downvote"><img src='thumbs_down.png' className='like'/></button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {ideas}
            </div>
        )
    }
}