import React from 'react'

const PostCard = ({ comments=[], setComments, reviews=[] }) => {

    function handleText(e){
        setComments(e.target.text)
    }

    function handleRating(e){
        setComments(e.target.rating)
    }

    function handleArt(e){
        setComments(e.target.art)
    }

    return (
        <div>
            {reviews.map((review) => {
            <>
                <h1>{review.title}</h1>
                <img src={reviews.image} atl={reviews.title} />
                <p>{reviews.description}</p>
                <p>{reviews.tags}</p>
                {/* How am I going to display the comments and have them link to the correct areas */}
                {comments.map((comment) => {
                    <>
                    <h3>{comment.text}</h3>
                    <img src={comment.image} />
                    <p>{comment.rating}</p>
                    </>
                })}
            <form>
                <input name={comments.text} require type='text' onChange={handleText} value={comments.value}/>
                <input name={comments.rating} require type='text' onChange={handleRating} value={comments.value}/>
                <input name={comments.image} onChange={handleArt} value={comments.value}/>
            </form>
            </>
            })}
        </div>
    )
}

export default PostCard
