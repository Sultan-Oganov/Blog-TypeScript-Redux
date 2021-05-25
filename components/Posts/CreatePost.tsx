import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import classes from '../../styles/posts.module.scss'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const router = useRouter()

    const addPost = () => {
        axios({
            method: 'POST',
            url: 'https://simple-blog-api.crew.red/posts',
            headers: '',
            data: {
                title: title,
                body: body
            }
        })
            .then((response) => router.push('/'))
    }

    return (
        <>
            <h2 className={classes.title}>Let's create a new Post</h2>
            <div className={classes.newPost}>
                <div className={classes.newPost__inputBox}>
                    <input className={classes.newPost__input} onChange={(e) => setTitle(e.target.value)} placeholder="Write post title" />
                </div>
                <div className={classes.newPost__inputBox}>
                    <input className={classes.newPost__input} onChange={(e) => setBody(e.target.value)} placeholder="Write post body" />
                </div>
                <button className={classes.newPost__btn} onClick={addPost}>Create new Post</button>
            </div>
        </>
    )
}

export default CreatePost