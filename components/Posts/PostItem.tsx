import React from 'react'
import Router from 'next/router'
import classes from '../../styles/posts.module.scss'

const PostItem = ({ post }) => {
    return (
        <div
            className={classes.post}
            key={post.id}
            onClick={() => Router.push(`/posts/${post.id}`)}
        >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostItem