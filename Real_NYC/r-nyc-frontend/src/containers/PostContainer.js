import React from "react"
import ReviewList from "../components/ReviewList"
// import ReviewCard from "../components/ReviewCard"
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