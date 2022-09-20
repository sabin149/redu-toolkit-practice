import React from 'react'
import { useSelector, } from 'react-redux'
import PostsExcerpt from './PostsExcerpt'
import { selectPostIds, getPostsStatus, getPostsError, } from './postsSlice'


const PostsList = () => {
    // const posts = useSelector(selectAllPosts)
    const orderedPostIds = useSelector(selectPostIds)    
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId } />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    return (
        <section>
            {content}

        </section>
    )
}

export default PostsList