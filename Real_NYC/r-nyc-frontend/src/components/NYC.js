import { useState, useEffect } from 'react'
import PostContainer from '../containers/PostContainer'
import '../css/NYC.css'

function NYC() {

    const [reviews, setReviews] = useState([])
    
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
            <img className="NYCBanner" src={window.location.origin + "/skyline.jpg" } alt="NYC" />
            <h1>Let's Take A Tour</h1>
            <PostContainer reviews={reviews} />
        </div>
    )
}

export default NYC
