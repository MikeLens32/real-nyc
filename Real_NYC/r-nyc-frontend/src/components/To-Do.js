import React from 'react'
import PostContainer from '../containers/PostContainer'

const ToDo = ({ reviews }) => {
    return (
        <div>
            <PostContainer reviews={reviews} />
        </div>
    )
}

export default ToDo
