import React from 'react'

const PostCard = ({comment, setComment, reviews}) => {

    function handleText(e){
        setComment(e.target.text)
    }

    function handleRating(e){
        setComment(e.target.rating)
    }

    function handleArt(e){
        setComment(e.target.art)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const commentInfo = {
            text: commentInfo.text,
            rating: commentInfo.rating,
            image: commentInfo.image
        }
            fetch('http://127.0.0.1:9393/reviews', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentInfo)
            })
            .then(r => r.json()) 
            .then(data => setComment(currentComments => [...currentComments, data]))
            .catch(error => console.log(error))
            setFormData({
                text: '',
                rating: '',
                image: ''
            })
        }

    return (
        <div>
            {reviews.map((review) => {
            <>
                <h1>{review.title}</h1>
                <img src={review.image} atl={review.title} />
                <p>{review.description}</p>
                <p>{review.tags}</p>
                {review.comments.map((comm) => {
                    <>
                    <h3>{comm.text}</h3>
                    <img src={comm.image} />
                    <p>{comm.rating}</p>
                    </>
                })}
            <form onSubmit={handleSubmit}>
                <input name={comment.text} require type='text' onChange={handleText} value={comment.value}/>
                <input name={comment.rating} require type='text' onChange={handleRating} value={comment.value}/>
                <input name={comment.image} onChange={handleArt} value={comment.value}/>
            </form>
            </>
            })}
        </div>
    )
}

export default PostCard
