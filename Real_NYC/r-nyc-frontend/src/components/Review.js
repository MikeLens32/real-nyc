import React from 'react'
import ReviewForm from './ReviewForm'
import "../css/Review.css"


const Review = ({ setReviews }) => {
    return (
        <div>
            <img src={window.location.origin + "/central_p.jpg"} alt="Central Park" />
            <ReviewForm setReviews={setReviews} />
        </div>
    )
}

export default Review
