import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'

const ReviewForm = ( ) => {

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        description: '',
        image: '',
        price: '',
        tags: '',
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }

    const history = useHistory()


    function handleSubmit(e) {
        e.preventDefault()
        
        const newReview = {
            title: formData.title,
            location: formData.location,
            description: formData.description,
            image: formData.image,
            price: formData.price,
            tags: formData.tags 
        }

        fetch('http://127.0.0.1:9393/reviews', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReview)
            })
            history.push('/NYC')

    }

    return (
        <div>
            <h1>Drop Review Here</h1>
            <br/>
            <Form className="ReviewForm" onSubmit={handleSubmit}>
                <Form.Group className="Title" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" onChange={handleChange} value={formData.title} type="text" placeholder="Title" />
                <br/>
                <Form.Label>Location</Form.Label>
                <Form.Control name="location" onChange={handleChange} value={formData.location} size="sm" type="text" placeholder="Tags" />
                <br/>
                </Form.Group>
                <Form.Group className="Description" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" onChange={handleChange} required as="textarea" value={formData.description} rows={3} placeholder="How was the experience"/>
                <br/>
                <Form.Label>Image</Form.Label>
                <Form.Control name="image" onChange={handleChange} required type="text" value={formData.image} placeholder="Image URL" />
                <br />
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" onChange={handleChange} value={formData.price} size="sm" type="number" />
                <br />
                <Form.Label>Tags</Form.Label>
                <Form.Control name="tags" onChange={handleChange} value={formData.tags} size="sm" type="text" placeholder="Tags" />
                </Form.Group>
                <br/>
                <input type='submit' value='Submit Review'/> 
                <br/>
            </Form>
            
        </div>
    )
}

export default ReviewForm
