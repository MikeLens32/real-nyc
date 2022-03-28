import React, {useState, useEffect} from "react"
import PostCard from "../components/PostCard"

function PostContainer({ reviews }) {

    const [comments, setComments] = useState({
        text: '',
        rating: '',
        image: ''
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const resp = await fetch('http://localhost:9393/comments')
                const data = await resp.json()
                setComments(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()

    }, [])

    if (loading) return <h1>Loading...</h1>

    return(
        <div>
            <PostCard reviews={reviews} comments={comments} />
        </div>
    )
}

export default PostContainer;