import { useState, useEffect } from 'react'
import PostContainer from '../containers/PostContainer'

function NYC() {

    const [reviews, setReviews] = useState({
        title: '',
        location: '',
        description: '',
        image: '',
        price: '',
        tags: '',
      })
    
      useEffect(() => {
        const fetchData = async () =>{
            try {
                const resp = await fetch('http://localhost:9393/reviews')
                const data = await resp.json()
                setReviews(data)
            } catch (error) {
                alert(error)
            }
        }
    
        fetchData()
    
    }, [])

    return (
        <div>
            <img src={window.location.origin + "/skyline.jpg"} />
            <h1>Let's Take A Tour</h1>
            <PostContainer reviews={reviews} />
        </div>
    )
}

export default NYC
