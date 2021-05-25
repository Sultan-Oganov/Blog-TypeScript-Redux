import React from 'react'
import classes from '../../styles/posts.module.scss'
import PostItem from './PostItem'

const PostsList = ({ posts }) => {
    return (
        <div className={classes.posts}>
            {
                posts ?
                    posts.map(post => {
                        if (post.title && post.id) {
                            return (
                                <PostItem key={post.id} post={post} />
                            )
                        }
                    }) : <h2>No Posts yet</h2>
            }
        </div>
    );
};

export default PostsList