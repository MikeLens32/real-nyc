import React from "react"
import PostCard from "../components/PostCard"

function PostContainer({ reviews }) {

    // const [comments, setComments] = useState({
    //     text: '',
    //     rating: '',
    //     image: ''
    // })


    return(
        <div>
            <PostCard reviews={reviews} />
        </div>
    )
}


export default PostContainer;