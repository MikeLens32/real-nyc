import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'

const ReviewForm = ({ setReviews }) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        tags: '',
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }


    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const formInfo = {
    //         title: formData.title,
    //         content: formData.content,
    //         image: formData.image,
    //         tags: formData.tags,
    //     }
    //         fetch('http://127.0.0.1:9393/reviews', {
    //             method: "POST",
    //             headers:{
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(formInfo)
    //         })
    //         .then(r => r.json()) 
    //         .then(data => setReviews(currentReviews => [...currentReviews, data]))
    //         .catch(error => console.log(error))
    //         setFormData({
    //             title: '',
    //             description: '',
    //             image: '',
    //             tags: '',
    //         })
    // }

    return (
        <div>
            <h1>Drop Review Here</h1>
            <br/>
            <Form className="ReviewForm">
                <Form.Group className="Title" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" onChange={handleChange} value={formData.title} required type="text" placeholder="Title" />
                <br/>
                </Form.Group>
                <Form.Group className="Description" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" required type="textarea" cols={40} rows={3} placeholder="How was the experience"/>
                <br/>
                <Form.Label>Image</Form.Label>
                <Form.Control name="image" onChange={handleChange} required type="text" placeholder="Image URL" />
                <br />
                <Form.Label>Tags</Form.Label>
                <Form.Control name="tags" onChange={handleChange} value={formData.tags} size="sm" type="text" placeholder="Tags" />
                </Form.Group>
                {/* <label>Title</label>
                <input name={formData.title} require type='text' onChange={handleChange} value={formData.title}
                />
                <label>Image URL</label>
                <input name={formData.image} require type='text' onChange={handleText} value={formData.image}
                />
                <label>Tags</label>
                <input name={formData.tags} require type='text' onChange={handleChange} value={formData.tags}
                />
                <br/>
                <br/>
                <label>Description</label>
                <textarea name={formData.description} cols="80" rows="5" require type='text' onChange={handleChange} value={formData.description}
                />*/}
                <input type='submit' value='Submit Review'/> 
            </Form>
            
        </div>
    )
}

export default ReviewForm
