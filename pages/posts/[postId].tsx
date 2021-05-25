import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '../../components/MainLayout'
import axios from 'axios'
import Link from 'next/link'
import Preloader from '../../components/Preloader/Preloader'
import classes from '../../styles/posts.module.scss'


const Post = ({ post: serverPost }) => {
    const router = useRouter()
    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${router.query.postId}?_embed=comments`)
            const data = await response.data
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>
            <Preloader />
        </MainLayout>
    }

    return (
        <MainLayout>
            <div className={classes.postId}>
                <h2 className={classes.postId__title}>{post.title}</h2>
                <hr />
                <p className={classes.postId__body}>{post.body}</p>
                <Link href="/"><a className={classes.btn__back}>Back to all Posts</a></Link>
            </div>
        </MainLayout>
    )
}

Post.getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return { post: null }
    }
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${ctx.query.postId}?_embed=comments`)
    const post = await response.data
    return {
        post
    }
}

export default Post