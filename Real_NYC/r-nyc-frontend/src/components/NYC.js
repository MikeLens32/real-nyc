import React from 'react'
import PostContainer from '../containers/PostContainer'

const NYC = ({ reviews }) => {
    return (
        <div>
            <img src={window.location.origin + "/skyline.jpg"} />
            <h1>Let's Take A Tour</h1>
            <PostContainer reviews={reviews} />
        </div>
    )
}

export default NYC
