import React from 'react'
import Form from 'react-bootstrap/Form'

const ReviewForm = ({ reviews, setReviews }) => {

    function handleChange(e){
        setReviews({
            ...reviews,
            [e.target.id]:e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formInfo = {
            title: reviews.title,
            content: reviews.content,
            image: reviews.image,
            tags: reviews.tags,
        }
            fetch('http://127.0.0.1:9393/reviews', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formInfo)
            })
            .then(r => r.json()) 
            .then(data => setReviews(currentReviews => [...currentReviews, data]))
            .catch(error => console.log(error))
            setReviews({
                title: '',
                description: '',
                image: '',
                tags: '',
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="ReviewForm">
                <Form.Group className="Title" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control name={reviews.title} onChange={handleChange} value={reviews.title} require type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group className="Description" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="How was the experience"/>
                <br/>
                <Form.Control name={reviews.image} onChange={handleChange} value={reviews.image} require type="text" placeholder="Image URL" />
                <br />
                <Form.Control name={reviews.image} onChange={handleChange} value={reviews.image} size="sm" type="text" placeholder="Tags" />
                </Form.Group>
                {/* <label>Title</label>
                <input name={formData.title} require type='text' onChange={handleChange} value={formData.title}
                />
                <label>Image URL</label>
                <input name={formData.image} require type='text' onChange={handleChange} value={formData.image}
                />
                <label>Tags</label>
                <input name={formData.tags} require type='text' onChange={handleChange} value={formData.tags}
                />
                <br/>
                <br/>
                <label>Description</label>
                <textarea name={formData.description} cols="80" rows="5" require type='text' onChange={handleChange} value={formData.description}
                /> */}
                <input type='submit' value='Submit Review'/>
            </Form>
            
        </div>
    )
}

export default ReviewForm
