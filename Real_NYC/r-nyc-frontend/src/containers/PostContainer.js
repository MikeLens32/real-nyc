import React, {useState, useEffect} from "react"
import PostCard from "../components/PostCard"

function PostContainer({ reviews }) {

    const [comments, setComments] = useState({
        text: '',
        rating: '',
        image: ''
    })

    useEffect(() => {
        fetch('http://127.0.0.1:9393/comments')
        .then(r => r.json())
        .then((commentData) => setComments(commentData))
        .catch((err) => alert(err))
    }, [])


    return(
        <div>
            <PostCard reviews={reviews} comment={comments} setComment={setComments} />
        </div>
    )
}

export default PostContainer;