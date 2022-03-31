import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import '../css/PostCard.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'

const PostCard = ({ reviews }) => {



    const mapReview = () => {
        return reviews.map((review) => (
            <CardGroup className='CardGroup'>
            <Card style={{ width: '20em' }} onSubmit={handleSubmit} key={review.id}>
                <Card.Img variant="top" src={review.image} />
                <Card.Body>
                <Card.Title>
                    <Link to={`http://localhost:9393/reviews/${review.id}`}>{review.title}</Link>
                </Card.Title>
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
                </Card.Body>
            <Card.Title>Comments</Card.Title>
            <Form >
                <Form.Label>Comment</Form.Label>
                <Form.Control name="text" required type='text' onChange={handleChange} value={comment.value}/>
                <br/>
                <Form.Label>Rating</Form.Label>
                <Form.Control name="rating" required type='number' onChange={handleChange} value={comment.value}/>
                <br/>
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="image" onChange={handleChange} value={comment.value}/>
                <br/>
                <input type='submit' value='Comment'/>
            </Form>
            {review.comments.map((comment) => (
                <Card.Body key={comment.review_id}>
                    <Card.Img src={comment.image} />
                    <Card.Text>{comment.text}</Card.Text>
                    <Card.Text>{comment.rating}</Card.Text>
                </Card.Body>
            ))}
            <br/>
            </Card>
            </CardGroup>
        ))
    }
    

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

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        const newComment = {
            review_id: comment.review_id,
            text: comment.text,
            rating: comment.rating,
            image: comment.image
        }
            fetch('http://127.0.0.1:9393/comments/:id', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            })
            .then(() => history.push('/NYC'))
            console.log(newComment)
        }


    return (
        <div>
            {mapReview()}
        </div>
    )
}

export default PostCard
