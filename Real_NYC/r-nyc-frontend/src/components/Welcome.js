import React from 'react'
import "../css/Welcome.css"

const Welcome = () => {
    return (
        <div>
            <img className="HomeBanner" src={window.location.origin + "/nyc.jpg"} alt="Central Park" />
            <img className="LogoHome" src={window.location.origin + "/Logo_NYC.png" } alt="Logo" />
            <p className="Paragraph">
                Welcome to Real NYC where people share what their favoirte places to go to were. New York has some the biggest tourist populations out of all the states in America and tourist usually go for the main two things to do. Being Statue of Liberty and visiting Time Square. NYC has so many things to offer from daily acttivities, to places to try new foods.
            </p>
        </div>
    )
}

export default Welcome
