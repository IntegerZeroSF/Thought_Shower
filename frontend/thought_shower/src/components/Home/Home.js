import React from 'react';
import "./Home.css"

function Home() {
    return (
        <div className="homeBody">
            <div className="cardDiv">
                <div className="cardHomeTop">
                    See other Thoughts!
                </div>
                <div className="cardHomeButtons">
                    <button className="homeButtons">Browse</button>
                </div>
            </div>
            <div className="cardDiv">
                <div className="cardHomeTop">
                    Or Make your own!
                </div>
                 <div className="cardHomeButtons">
                    <button className="homeButtons">Make</button>
                </div>
            </div>
        </div>
    )
}

export default Home;