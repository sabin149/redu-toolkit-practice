import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostsExcerpt from './PostsExcerpt'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice'


const PostsList = () => {
    const dispatch = useDispatch()
    const effectRan = useRef(false)
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (effectRan.current === false) {
            if (postStatus === "idle") {
                dispatch(fetchPosts())
            }
        }
        return () => {
            effectRan.current = true
        }
    }, [dispatch, postStatus])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    return (
        <section>
            <h2>Posts</h2>
            {content}

        </section>
    )
}

export default PostsList