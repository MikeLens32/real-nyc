import React, {useState} from 'react'

const ReviewForm = ({ setReviews }) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        tags: '',
    })

    function handleTitle(e){
        setFormData(e.target.value)
    }

    function handleContent(e){
        setFormData(e.target.value)
    }
    
    function handleArt(e){
        setFormData(e.target.value)
    }
    
    function handleTags(e){
        setFormData(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formInfo = {
            title: formInfo.title,
            content: formInfo.content,
            art: formInfo.art,
            tags: formInfo.tags,
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
                <input name={formData.title} require type='text' onChange={handleTitle} value={formData.title}
                />
                <label></label>
                <input name={formData.description} require type='text' onChange={handleContent} value={formData.description}
                />
                <label></label>
                <input name={formData.image} require type='text' onChange={handleArt} value={formData.image}
                />
                <input name={formData.tags} require type='text' onChange={handleTags} value={formData.tags}
                />
                <input type='submit' value='Submit Review'/>
            </form>
            
        </div>
    )
}

export default ReviewForm