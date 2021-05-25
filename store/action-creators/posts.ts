import axios from 'axios'
import { Dispatch } from 'react'
import { PostsAction, PostsActionTypes } from '../../types/posts'

export const FetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts')

            dispatch({ type: PostsActionTypes.FETCH_POSTS, payload: response.data })
        } catch (e) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: 'Server Error',
            })
        }
    }
}