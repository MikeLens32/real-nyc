import React from 'react'
import ReviewForm from './ReviewForm'

const Review = ({ setReviews }) => {
    return (
        <div>
            <ReviewForm setReviews={setReviews} />
        </div>
    )
}

export default Review
