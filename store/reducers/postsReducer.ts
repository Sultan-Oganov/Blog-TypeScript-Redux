import { PostsActionTypes, PostsAction, PostsState } from '../../types/posts'

const initialState: PostsState = {
    posts: [],
    error: '',
}

export const postsReducer = (
    state = initialState,
    action: PostsAction
): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return { ...state, error: action.payload }
        case PostsActionTypes.FETCH_POSTS:
            return { error: '', posts: action.payload }
        case PostsActionTypes.ADD_POSTS:
            return { error: '', posts: action.payload }
        default:
            return state
    }
}