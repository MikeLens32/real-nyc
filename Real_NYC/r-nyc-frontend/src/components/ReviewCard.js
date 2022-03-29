import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <div>
            <h1>{review.title}</h1>
            <h3>{review.description}</h3>
            <h3>{review.image}</h3>
            <h3>{review.tags}</h3>
        </div>
    )
}

export default ReviewCard;