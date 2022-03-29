import React, { useState } from 'react'

const PostCard = ({ reviews }) => {

    const [comment, setComment] = useState({
        text: "",
        rating: "",
        image: ""
    })

    function handleChange(e) {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newComment = {
            text: comment.text,
            rating: comment.rating,
            image: comment.image
        }
            fetch('http://127.0.0.1:9393/comments', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            })
        }

    return (
        <div>
            {reviews.map((review) => {
            <div>
                <h1>{review.title}</h1>
                <img src={review.image} atl={review.title} />
                <p>{review.description}</p>
                <p>{review.tags}</p>
                {review.comments.map((comm) => { 
                    <div>
                    <h3>{comm.text}</h3>
                    <img src={comm.image} />
                    <p>{comm.rating}</p>
                    </div>
                })} 
            
            </div>
            })}
        </div>
    )
}

export default PostCard
