import React, {useState} from 'react'

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
            [e.target.id]:e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formInfo = {
            title: formData.title,
            content: formData.content,
            image: formData.image,
            tags: formData.tags,
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
            setFormData({
                title: '',
                description: '',
                image: '',
                tags: '',
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label></label>
                <input name={formData.title} require type='text' onChange={handleChange} value={formData.title}
                />
                <label></label>
                <input name={formData.description} require type='text' onChange={handleChange} value={formData.description}
                />
                <label></label>
                <input name={formData.image} require type='text' onChange={handleChange} value={formData.image}
                />
                <input name={formData.tags} require type='text' onChange={handleChange} value={formData.tags}
                />
                <input type='submit' value='Submit Review'/>
            </form>
            
        </div>
    )
}

export default ReviewForm
