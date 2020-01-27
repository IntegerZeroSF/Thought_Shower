import React from 'react'
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
        const ideas = this.state.ideas.map(arr => (
            <div>
                <h1>{arr.title}</h1>
                <h2>{arr.category}</h2>
                <button>View Details</button>
            </div>
        ))
        return (
            <div>
                <p>from title view</p>
                {ideas}
            </div>
        )
    }
}