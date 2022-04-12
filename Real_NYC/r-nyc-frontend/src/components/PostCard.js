import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import '../css/PostCard.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'

const PostCard = ({ reviews }) => {
    
    const [reviewsList, setReviewsList] = useState(reviews)

    const [comment, setComment] = useState({
        review_id: "",
        text: "",
        rating: "",
        image: ""
    })

    const unique_id = uuid()

    function handleChange(e) {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setReviewsList(reviews)

    }, [reviews])
        
    function handleDelete(reviewId) {
            fetch(`http://127.0.0.1:9393/reviews/${reviewId}`, { method: 'DELETE',})
            .then(r => r.json())
            .then((delData) => setReviewsList(reviewsList.filter((r) => r.id !== delData.id)))
    }

    function handleSubmit(e, review) {
        e.preventDefault();
        const newComment = {
            review_id: review.id,
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
            .then((r) => r.json())
            .then((data) => {
                const reviewIndex = reviewsList.findIndex((reviewObj) => {
                    return review.id === reviewObj.id
                })
                const finalReview = {
                    ...review,
                    comments: [...review.comments, data]
                }
                setReviewsList([
                    ...reviewsList.slice(0, reviewIndex),
                    finalReview, 
                    ...reviewsList.slice(reviewIndex +1)
                ])
                setComment({
                    review_id: "",
                    text: "",
                    rating: "",
                    image: ""
                })
            })
        }

    const mapReview = () => {
        return reviewsList.map((review) => (
            <CardGroup className='CardGroup'>
            <Card style={{ width: '20em' }} key={review.id}>
                <Card.Img variant="top" src={review.image} />
                <Card.Body >
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>
                    {review.location}
                </Card.Text>
                <Card.Text>
                    {review.description}
                </Card.Text>
                <Card.Text>
                    {review.price}
                </Card.Text>
                <Card.Text>
                    {review.tags}
                </Card.Text>
                <input className='DeleteButton' onClick={() => handleDelete(review.id)} type='submit' value='delete' />
                </Card.Body>
                <ColoredLine color="black" />
            <Form onSubmit={e => handleSubmit(e, review)} >
                <Form.Label>Comment</Form.Label>
                <Form.Control name="text" required type='text' onChange={handleChange} value={comment.text}/>
                <br/>
                <Form.Label>Rating</Form.Label>
                <Form.Control name="rating" required type='number' min='1' max='5' onChange={handleChange} value={comment.rating}/>
                <br/>
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="image" onChange={handleChange} value={comment.image}/>
                <br/>
                <input className='CommentButton' type='submit' value='Comment'/>
            </Form>
            {review.comments.map((comment) => (
                <Card.Body key={comment.unique_id}>
                    <Card.Img src={comment.image} />
                    <Card.Text>{comment.text}</Card.Text>
                    <Card.Text>{comment.rating}</Card.Text>
                </Card.Body>
            ))}
            <ColoredLineExpanded color="black" />
            <br/>
            </Card>
            </CardGroup>
        ))
    }

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );
    
    const ColoredLineExpanded = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 20
            }}
        />
    );

    return (
        <div>
            {mapReview()}
        </div>
    )
}

export default PostCard
