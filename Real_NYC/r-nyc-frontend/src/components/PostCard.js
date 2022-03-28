import React, { useState } from 'react'

const PostCard = ({ reviews, comments }) => {

    const [psComment, setPsComments] = useState({
        text: "",
        rating: "",
        image: ""
    })

    function handleChange(e) {
        setPsComments({
            ...psComment,
            [e.target.name]: e.target.value
        })
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const commentInfo = {
    //         text: comment.text,
    //         rating: comment.rating,
    //         image: comment.image
    //     }
    //         fetch('http://127.0.0.1:9393/comments', {
    //             method: "POST",
    //             headers:{
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(commentInfo)
    //         })
    //         .then(r => r.json()) 
    //         .then(data => setComment(currentComments => [...currentComments, data]))
    //         .catch(error => console.log(error))
    //         setComment({
    //             text: '',
    //             rating: '',
    //             image: ''
    //         })
    //     }

    return (
        <div>
            {reviews.map((review) => {
            <div>
                <h1>{review.title}</h1>
                {/* <img src={review.image} atl={review.title} /> */}
                <p>{review.description}</p>
                <p>{review.tags}</p>
                {/* {review.comments.map((comm) => {
                    <div>
                    <h3>{comm.text}</h3>
                    <img src={comm.image} />
                    <p>{comm.rating}</p>
                    </div>
                })} */}
            {/* <form >
                <input name={comment.text} require type='text' onChange={handleText} value={comment.value}/>
                <input name={comment.rating} require type='text' onChange={handleRating} value={comment.value}/>
                <input name={comment.image} onChange={handleArt} value={comment.value}/>
            </form> */}
            </div>
            })}
        </div>
    )
}

export default PostCard
