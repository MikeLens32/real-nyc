import React from 'react'
import { useParams, useState } from 'react-router'

const ReviewDetail = () => {

    const {id} = useParams()
    const [review, setReview] =useState()

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const resp = await fetch(`http://localhost:9393/reviews/${id}`)
                const data = await resp.json()
                setReview(data)
            } catch (error) {
                alert(error)
            }
        }
    
        fetchData()
    
    }, [id])
    const mapReview = () => {
        return review.map((review) => (
            <CardGroup className='CardGroup'>
            <Card style={{ width: '20em' }} key={review.id}>
                <Card.Img variant="top" src={review.image} />
                <Card.Body>
                <Card.Title>
                    {review.title}
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
            
            </Card>
            </CardGroup>
        ))
    }
    return (
        <div>
            {displayReview}
        </div>
    )
}

export default ReviewDetail
